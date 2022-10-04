import React from 'react';
import { useRef, useEffect } from 'react';
import styled from '@emotion/styled';

import { tendrilAnimation, AnimationProps } from './tendrilAnimation';

function TendrilAnimation({ trails, settings }: AnimationProps) {
   const ref = useRef(null);
   useEffect(() => {
      if (ref.current) {
         const canvas = ref.current;

         tendrilAnimation({
            canvas,
            trails,
            settings,
         });
      }
   }, [ref]);
   return <Canvas ref={ref}></Canvas>;
}

const Canvas = styled.canvas`
   position: fixed;
   top: 0;
   z-index: 7;
`;

export default TendrilAnimation;
