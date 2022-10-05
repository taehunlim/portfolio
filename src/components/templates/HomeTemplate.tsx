import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

import StarTemplate from 'components/templates/StarTemplate';
import Tendril from 'components/organisms/Tendril';

interface Props {
   header: ReactNode;
   children: ReactNode;
}

function HomeTemplate({ header, children }: Props) {
   const settings = {
      bg: 'rgba(0, 0, 0, .1)',
      // compositeOperation: 'destination-out ' as GlobalCompositeOperation,
      // color,
      // debug: false,
      //   size: 50,
      // friction: 0.5,
      // dampening: 0.25,
      // tension: 0.1,
   };
   return (
      <StarTemplate>
         {header}
         <Wrapper>{children}</Wrapper>
         <Tendril trails={30} settings={settings} />
      </StarTemplate>
   );
}

const Wrapper = styled.div`
   height: 100%;
   position: relative;
   z-index: 8;
`;

export default HomeTemplate;
