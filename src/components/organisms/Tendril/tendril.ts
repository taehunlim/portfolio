type OptionsProps<T = void> = {
   spring: number;
   settings: T extends 'required' ? RequiredSettingsProps : SettingsProps;
   position: PositionProps;
};

interface RequiredSettingsProps {
   size: number;
   friction: number;
   dampening: number;
   tension: number;
}

interface PositionProps {
   x: number;
   y: number;
}

interface NodeProps extends PositionProps {
   vx: number;
   vy: number;
}

export type SettingsProps = ColorProps & {
   [key in keyof RequiredSettingsProps]?: number;
};

interface ColorProps {
   color?: string;
   bg?: string;
   compositeOperation?: GlobalCompositeOperation;
}

export interface TendrilProps {
   options: OptionsProps<'required'>;
   spring: number;
   friction: number;
   nodes: NodeProps[];
   update: () => void;
   draw: (ctx: CanvasRenderingContext2D) => void;
}

export default class Tendril {
   options: OptionsProps<'required'>;
   spring: number;
   friction: number;
   nodes: NodeProps[];

   constructor(options: OptionsProps) {
      this.options = {
         ...options,
         spring: options.spring || 0.45,
         settings: {
            size: 50,
            friction: 0.5,
            dampening: 0.25,
            tension: 0.98,
            ...options.settings,
         },
      };

      this.init();
   }

   init() {
      const { spring, settings, position } = this.options;

      this.spring = spring + Math.random() * 0.1 - 0.05;
      this.friction = settings.friction + Math.random() * 0.01 - 0.005;
      this.nodes = [];

      for (let i = 0; i < settings.size; i++) {
         let node = {
            x: 0,
            y: 0,
            vy: 0,
            vx: 0,
         };

         node.x = position.x;
         node.y = position.y;

         this.nodes.push(node);
      }
   }

   update() {
      const { settings, position } = this.options;

      // init
      let spring = this.spring,
         node = this.nodes[0];

      node.vx += (position.x - node.x) * spring;
      node.vy += (position.y - node.y) * spring;

      // update
      for (let prevNode, i = 0, n = this.nodes.length; i < n; i++) {
         node = this.nodes[i];

         if (i > 0) {
            prevNode = this.nodes[i - 1];

            node.vx += (prevNode.x - node.x) * spring;
            node.vy += (prevNode.y - node.y) * spring;
            node.vx += prevNode.vx * settings.dampening;
            node.vy += prevNode.vy * settings.dampening;
         }

         node.vx *= this.friction;
         node.vy *= this.friction;
         node.x += node.vx;
         node.y += node.vy;

         spring *= settings.tension;
      }
   }

   draw(ctx: CanvasRenderingContext2D) {
      let x = this.nodes[0].x,
         y = this.nodes[0].y;

      let currentNode: NodeProps = {
         x,
         y,
         vx: 0,
         vy: 0,
      };
      let nextNode: NodeProps = {
         x,
         y,
         vx: 0,
         vy: 0,
      };

      ctx.beginPath();
      ctx.moveTo(x, y);

      for (let i = 1, n = this.nodes.length - 1; i < n; i++) {
         currentNode = this.nodes[i];
         nextNode = this.nodes[i + 1];
         x = (currentNode.x + nextNode.x) * 0.5;
         y = (currentNode.y + nextNode.y) * 0.5;

         ctx.quadraticCurveTo(currentNode.x, currentNode.y, x, y);
      }

      ctx.quadraticCurveTo(
         currentNode.x,
         currentNode.y,
         nextNode.x,
         nextNode.y,
      );
      ctx.stroke();
      ctx.closePath();
   }
}
