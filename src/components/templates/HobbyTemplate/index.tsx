import React, { ReactNode } from 'react';

import Header from 'components/organisms/Header';

import styledComponent from './style';

const { Container, Wrapper } = styledComponent;

interface Props {
   children: ReactNode;
}

function HobbyTemplates({ children }: Props) {
   return (
      <Container>
         <Header />
         <Wrapper>{children}</Wrapper>
      </Container>
   );
}

export default HobbyTemplates;
