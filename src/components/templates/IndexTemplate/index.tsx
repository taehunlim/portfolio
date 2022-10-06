import React, { ReactNode } from 'react';

import StarTemplate from 'components/templates/StarTemplate';
import Tendril from 'components/organisms/Tendril';

import styledComponent from './style';

const { Wrapper } = styledComponent;

interface Props {
   children: ReactNode;
}

function IndexTemplate({ children }: Props) {
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
      <StarTemplate>
         <Wrapper>{children}</Wrapper>
         <Tendril trails={30} settings={settings} />
      </StarTemplate>
   );
}

export default IndexTemplate;
