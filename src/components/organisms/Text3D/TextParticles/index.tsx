import React, { useRef, useEffect } from 'react';

import textParticles from './TextParticles';
import texts from 'fixtures/testx.json';
import { Container } from './style';

const TextParticles = () => {
   const ref = useRef(null);
   useEffect(() => {
      if (ref.current) {
         textParticles(ref.current, texts);
      }
   }, [ref]);

   return <Container ref={ref}></Container>;
};

export default TextParticles;
