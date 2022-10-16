import island from '../assets/images/island.jpeg';
import paris from '../assets/images/paris.jpeg';
import prague from '../assets/images/prague.jpeg';
import swiss from '../assets/images/swiss.jpeg';

export function fetchImageData() {
   let imagePromise = fetchImages();
   return wrapPromise(imagePromise);
}

function wrapPromise<T>(promise: Promise<T>) {
   let status = 'pending';
   let result: T | undefined = undefined;
   let error: Error;
   let suspender = promise.then(
      (r) => {
         status = 'success';

         result = r;
      },
      (e: Error) => {
         status = 'error';
         error = e;
      },
   );

   return {
      read() {
         if (status === 'pending') throw suspender;
         if (status === 'error') throw error;

         return result;
      },
   };
}

function fetchImages(): Promise<string[]> {
   console.log('fetch image...');

   return new Promise((resolve) => {
      setTimeout(() => {
         console.log('fetched images');
         resolve([island, paris, prague, swiss]);
      }, 3000);
   });
}
