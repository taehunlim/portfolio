import React, { useState } from 'react';

import KaleidoscopeSlide from 'components/organisms/KaleidoscopeSlide';

import island from '../assets/images/island.jpeg';
import paris from '../assets/images/paris.jpeg';
import prague from '../assets/images/prague.jpeg';
import swiss from '../assets/images/swiss.jpeg';

function hobby() {
   const images = [island, paris, prague, swiss];
   const [imageIndex, setImageIndex] = useState(0);

   return (
      <div style={{ display: 'flex', minHeight: '100vh' }}>
         <KaleidoscopeSlide
            images={images}
            defaultIndex={imageIndex}
            onChange={(e) => setImageIndex(e.imageIndex)}
         />
      </div>
   );
}

export default hobby;
