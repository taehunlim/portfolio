import Tendril, { TendrilProps, SettingsProps } from './tendril';

interface TendrilAnimationProps extends AnimationProps {
   canvas: HTMLCanvasElement;
}

interface ContextProps extends CanvasRenderingContext2D {
   running: boolean;
}

export interface AnimationProps {
   trails: number;
   settings: SettingsProps;
}

export function tendrilAnimation({
   canvas,
   trails,
   settings,
}: TendrilAnimationProps) {
   const ctx = canvas.getContext('2d') as ContextProps;
   let position = {
      x: 0,
      y: 0,
   };

   let tendrils: TendrilProps[] = [];

   function init(event: MouseEvent | TouchEvent) {
      document.removeEventListener('mousemove', init);
      document.removeEventListener('touchstart', init);
      document.removeEventListener('touchmove', init);

      document.addEventListener('mousemove', mousemove);
      // document.addEventListener('touchstart', touchstart);
      // document.addEventListener('touchmove', mousemove);

      mousemove(event);
      reset();
      loop();
   }

   function reset() {
      tendrils = [];

      for (let i = 0; i < trails; i++) {
         tendrils.push(
            new Tendril({
               settings,
               position,
               spring: 0.45 + 0.025 * (i / trails),
            }),
         );
      }
   }

   function loop() {
      if (!ctx.running) return;

      ctx.globalCompositeOperation =
         settings.fillCompositeOperation || 'source-over';

      ctx.fillStyle = settings.bg || '#1D1D1D';
      ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

      ctx.globalCompositeOperation =
         settings.storkCompositeOperation || 'lighter';

      ctx.lineWidth = 1;
      ctx.strokeStyle = settings.color || '#1b2735';

      for (let i = 0, tendril; i < trails; i++) {
         tendril = tendrils[i];

         tendril.update();
         tendril.draw(ctx);
      }

      requestAnimationFrame(loop);
   }

   function resize() {
      ctx.canvas.width = window.innerWidth;
      ctx.canvas.height = 5420;
   }

   function start() {
      if (!ctx.running) {
         ctx.running = true;
         loop();
      }
   }

   function stop() {
      ctx.running = false;
   }

   function mousemove(event: MouseEvent | TouchEvent) {
      if (event instanceof TouchEvent) {
         position.x = event.touches[0].pageX;
         position.y = event.touches[0].pageY;
      } else {
         position.x = event.clientX;
         position.y = event.clientY;
      }
   }

   // function touchstart(event: TouchEvent) {
   //    if (event.touches.length == 1) {
   //       position.x = event.touches[0].pageX;
   //       position.y = event.touches[0].pageY;
   //    }
   // }

   window.requestAnimationFrame = (function () {
      return (
         window.requestAnimationFrame ||
         function (fn) {
            window.setTimeout(fn, 1000 / 60);
         }
      );
   })();

   ctx.running = true;

   document.body.addEventListener('orientationchange', resize);
   window.addEventListener('resize', resize);
   window.addEventListener('focus', start);
   window.addEventListener('blur', stop);

   document.addEventListener('mousemove', init);
   // document.addEventListener('touchstart', init);
   // document.addEventListener('touchmove', init);

   resize();
}
