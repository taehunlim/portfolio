import React, { useState } from 'react';

import HobbyTemplates from 'components/templates/HobbyTemplate';
import KaleidoscopeSlide from 'components/organisms/KaleidoscopeSlide';
import Modal from 'components/molecules/Modal';
import Slide from 'components/molecules/Slide';

import island from '../assets/images/island.jpeg';
import paris from '../assets/images/paris.jpeg';
import prague from '../assets/images/prague.jpeg';
import swiss from '../assets/images/swiss.jpeg';

function hobby() {
   const images = [island, paris, prague, swiss];

   const [isShow, setIsShow] = useState<boolean>();
   const [imageIndex, setImageIndex] = useState(0);

   return (
      <HobbyTemplates>
         <KaleidoscopeSlide
            images={images}
            defaultIndex={imageIndex}
            onChange={(e) => setImageIndex(e.imageIndex)}
            onDetail={() => setIsShow(true)}
         />

         <Modal show={isShow} onClose={() => setIsShow(false)}>
            <Slide
               onChange={(e) => setImageIndex(e.slideIndex)}
               defaultIndex={imageIndex}
            >
               {images.map((src, index) => (
                  <img key={index} src={src} width="100%" />
               ))}
            </Slide>
         </Modal>
      </HobbyTemplates>
   );
}

export default hobby;
