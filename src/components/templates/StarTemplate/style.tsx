import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const animStar = keyframes`
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(-2000px);
  }
`;

function random(max: number) {
   return Math.floor(Math.random() * (max + 1));
}

function unquote(someStr: string) {
   return someStr.replace(/['"]+/g, '');
}

function multiple_box_shadow(n: number) {
   let value = `${random(4000)}px ${random(2000)}px #FFF`;

   for (let i = 2; i < n; i++) {
      value = `${value} , ${random(4000)}px ${random(2000)}px #FFF`;
   }

   return `${unquote(value)}`;
}

const shadows_small = `${multiple_box_shadow(700)}`;
const shadows_medium = `${multiple_box_shadow(200)}`;
const shadows_big = `${multiple_box_shadow(100)}`;

const Container = styled.div`
   min-height: 100vh;
   height: 100%;
   background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
   // overflow: hidden;
`;

const StarSmall = styled.div`
   position: fixed;
   z-index: 9;
   width: 1px;
   height: 1px;
   background: transparent;
   box-shadow: ${shadows_small};
   animation: ${animStar} 50s linear infinite;
   &:after {
      content: ' ';
      position: absolute;
      top: 2000px;
      width: 1px;
      height: 1px;
      background: transparent;
      box-shadow: ${shadows_small};
   }
`;

const StarMedium = styled.div`
   position: fixed;
   z-index: 9;
   width: 2px;
   height: 2px;
   background: transparent;
   box-shadow: ${shadows_medium};
   animation: ${animStar} 100s linear infinite;

   &:after {
      content: ' ';
      position: absolute;
      top: 2000px;
      width: 2px;
      height: 2px;
      background: transparent;
      box-shadow: ${shadows_medium};
   }
`;

const StarLarge = styled.div`
   position: fixed;
   z-index: 9;
   width: 3px;
   height: 3px;
   background: transparent;
   box-shadow: ${shadows_big};
   animation: ${animStar} 150s linear infinite;
   &:after {
      content: ' ';
      position: absolute;
      top: 2000px;
      width: 3px;
      height: 3px;
      background: transparent;
      box-shadow: ${shadows_big};
   }
`;

const styledComponent = {
   Container,
   StarSmall,
   StarMedium,
   StarLarge,
};

export default styledComponent;
