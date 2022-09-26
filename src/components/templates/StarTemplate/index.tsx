import React, { ReactNode } from 'react';

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
         {children}
      </Container>
   );
}

export default StarTemplate;
