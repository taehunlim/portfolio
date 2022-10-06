import React, { ReactNode } from 'react';
import Header from 'components/organisms/Header';

import styledComponent from './style';

const { Container, StarSmall, StarMedium, StarLarge } = styledComponent;

interface Props {
   children: ReactNode;
}

function StarTemplate({ children }: Props) {
   return (
      <Container>
         <StarSmall />
         <StarMedium />
         <StarLarge />
         <Header />
         {children}
      </Container>
   );
}

export default StarTemplate;
