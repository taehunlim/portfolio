import * as THREE from 'three';

import { FontLoader, Font } from 'three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

interface Extra {
   textId?: number;
   url?: string;
}

type CustomMesh = THREE.Mesh & Extra;
type CustomGeometry = TextGeometry & Extra;
type Object3D = THREE.Object3D<THREE.Event> & Extra;

type IntersectionObject3D = Object3D & {
   geometry: CustomGeometry;
};
type Intersection = THREE.Intersection<THREE.Object3D<THREE.Event>> & {
   object: IntersectionObject3D;
};

let renderer: THREE.WebGLRenderer;
let scene: THREE.Scene;
let camera: THREE.PerspectiveCamera;
let mesh: CustomMesh;
let geometry: CustomGeometry;
let material: THREE.MeshBasicMaterial;
let particles: Omit<THREE.Group, 'children'> & {
   children: Object3D[];
};
let particleBgs: THREE.Group;
let font: Font;
let geometries: typeof geometry[];
let textId: number;
let isStop = true;

let raycaster = new THREE.Raycaster();
let pointer = new THREE.Vector2();
let controls: OrbitControls;

interface TextProps {
   id: number;
   label: string;
   url?: string;
   size?: number;
}

export default function textParticles(
   el: Element,
   texts: TextProps[],
   repeat?: number,
) {
   const fontLoader = new FontLoader();
   const fontPath = '/';

   fontLoader.load(fontPath + 'inter_Bold.json', (f) => {
      font = f;
      init();
      animate();
   });

   function init() {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(
         window.devicePixelRatio ? window.devicePixelRatio : 1,
      );
      renderer.setSize(el.clientWidth, el.clientHeight);
      renderer.autoClear = false;
      renderer.setClearColor(0x000000, 0.0);
      el.appendChild(renderer.domElement);

      scene = new THREE.Scene();

      camera = new THREE.PerspectiveCamera(
         75,
         window.innerWidth / window.innerHeight,
         1,
         1000,
      );
      camera.position.z = 200;

      scene.add(camera);

      drawParticles(repeat);

      setLights();

      controls = new OrbitControls(camera, renderer.domElement);
      controls.autoRotate = true;
      controls.rotateSpeed = 0.5;
      controls.maxDistance = 1000;
      controls.minDistance = 50;

      window.addEventListener('resize', onWindowResize, false);
      el.addEventListener('click', onMouseClick, false);
      el.addEventListener('mousemove', handlePointer, false);
   }

   function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(el.clientWidth, el.clientHeight);
   }

   function drawParticles(repeat = 1) {
      geometries = [];
      particles = new THREE.Group();
      particleBgs = new THREE.Group();

      material = new THREE.MeshBasicMaterial({
         color: 0xffffff,
         wireframe: false,
      });

      const textLength = texts.length;
      const isRepeat = repeat > 1;
      for (let i = 0, j = textLength * repeat; i < j; i++) {
         if (i < textLength) {
            const geometry = new TextGeometry(texts[i].label, {
               font: font,
               size: texts[i].size || 15,
               height: 5,

               curveSegments: 10, // ????????? ????????? ???????????? ????????? ?????? (?????? ??? 12) = ?????? ?????? ?????? ????????? ??????
            });
            geometry.computeBoundingBox();

            geometries.push(geometry);
         }

         geometry = geometries[i % textLength];
         geometry.url = isRepeat ? texts[i % textLength].url : texts[i].url;
         geometry.textId = isRepeat
            ? texts[i % textLength].id + Math.floor(i / 8) * 8
            : texts[i].id;

         textId = geometry.textId;

         mesh = new THREE.Mesh(geometry, material);

         const textSize = mesh.geometry.boundingBox!.max;
         const { x: textWidth } = textSize;

         mesh.position
            .set(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5)
            .normalize();
         mesh.position.multiplyScalar(90 + Math.random() * 1);
         mesh.position.x = mesh.position.x - textWidth / 2;

         mesh.textId = textId;

         particles.add(mesh);

         drawPlaneForText(mesh);
      }

      scene.add(particles);
      scene.add(particleBgs);
   }

   function drawPlaneForText(textMesh: CustomMesh) {
      const { x, y } = textMesh.geometry.boundingBox!.max;

      const geometry = new THREE.PlaneGeometry(x, y);
      const material = new THREE.MeshBasicMaterial({
         color: 0x000000,
         wireframe: true,
      });

      mesh = new THREE.Mesh(geometry, material);

      mesh.position.set(
         textMesh.position.x,
         textMesh.position.y,
         textMesh.position.z,
      );
      mesh.position.x = textMesh.position.x + x / 2;
      mesh.position.y = textMesh.position.y + y / 2;

      mesh.visible = false;

      mesh.textId = textId;
      particleBgs.add(mesh);
   }

   function setLights() {
      const ambientLight = new THREE.AmbientLight(0x999999, 0.5);

      scene.add(ambientLight);
   }

   function onMouseClick() {
      raycaster.setFromCamera(pointer, camera);

      const intersects: Intersection[] = raycaster.intersectObject(particles);
      if (intersects.length > 0) {
         const { object } = intersects[0];

         const { url } = object.geometry;

         window.open(url);
      }
   }

   function handlePointer(event: PointerEvent) {
      pointer.x = (event.offsetX / el.clientWidth) * 2 - 1;
      pointer.y = -(event.offsetY / el.clientHeight) * 2 + 1;

      handleHoverEvent();
   }

   function handleHoverEvent() {
      raycaster.setFromCamera(pointer, camera);

      const intersects: Intersection[] = raycaster.intersectObject(particleBgs);

      if (intersects.length > 0) {
         particles.children.filter((textMesh) => {
            isStop = false;

            const isIntersectedMesh = intersects.some(
               (intersect) => intersect.object.textId === textMesh.textId,
            );

            if (isIntersectedMesh) {
               scaleAnimation(textMesh);
            } else {
               if (textMesh.scale.x > 1) {
                  textMesh.scale.x = 1;
                  textMesh.scale.y = 1;
               }
            }

            return isIntersectedMesh;
         });
      } else {
         if (!isStop) {
            isStop = true;

            particles.children.forEach((mesh) => {
               if (mesh.scale.x > 1) {
                  mesh.scale.x = 1;
                  mesh.scale.y = 1;
               }
            });
         }
      }

      function scaleAnimation(mesh: THREE.Object3D) {
         const interval: NodeJS.Timer = setInterval(() => {
            if (mesh.scale.x >= 1.5 || isStop) {
               return clearInterval(interval);
            }

            mesh.scale.x += 0.01;
            mesh.scale.y += 0.01;
         });
      }
   }

   function animate() {
      requestAnimationFrame(animate);
      controls.update();

      renderer.clear();
      renderer.render(scene, camera);
   }
}
