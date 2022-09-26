import styled from '@emotion/styled';

import { AnimationProps } from './model';

export interface StyledSlideProps {
   animation?: AnimationProps[];
}

const Container = styled.div`
   //position: relative;
`;

const Sticky = styled.div`
   position: sticky;
   top: 0;
   width: 100%;
   height: 100vh;
`;

const SlideContainer = styled.div`
   position: relative;
   display: flex;
   align-items: center;
   justify-content: center;
   width: 100%;
   height: 100%;
`;

const StyledSlide = styled.div<StyledSlideProps>`
   position: absolute;
   z-index: 0;

   display: none;

   &.enabled {
      display: block;
   }

   &.scdown {
      position: absolute;
      padding: 30px 0;
      width: 100%;
      height: 50px;
      text-align: center;
      bottom: 0px;
      box-sizing: content-box;
   }
`;

const styledComponent = {
   Container,
   Sticky,
   SlideContainer,
   StyledSlide,
};

export default styledComponent;
