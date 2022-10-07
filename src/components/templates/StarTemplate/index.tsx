import React, { ReactNode } from 'react';

import Header from 'components/organisms/Header';
import Tendril from 'components/organisms/Tendril';

import styledComponent from './style';

const { Container, StarSmall, StarMedium, StarLarge } = styledComponent;

interface Props {
   children: ReactNode;
}

function StarTemplate({ children }: Props) {
   const settings = {
      bg: 'transparent',
      fillCompositeOperation: 'copy' as GlobalCompositeOperation,
      // storkCompositeOperation: 'darken' as GlobalCompositeOperation,
      // color,
      // debug: false,
      //   size: 50,
      // friction: 0.5,
      // dampening: 0.25,
      // tension: 0.1,
   };
   return (
      <Container>
         <StarSmall />
         <StarMedium />
         <StarLarge />
         <Header />
         {children}
         <Tendril trails={30} settings={settings} />
      </Container>
   );
}

export default StarTemplate;
