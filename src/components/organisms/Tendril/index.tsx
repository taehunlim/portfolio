import React from 'react';
import { useRef, useEffect } from 'react';

import { tendrilAnimation, AnimationProps } from './tendrilAnimation';

import styledComponent from './style';

const { StyledCanvas } = styledComponent;

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
   return <StyledCanvas ref={ref}></StyledCanvas>;
}

export default TendrilAnimation;
