import React from 'react';

import Spinner from 'components/atoms/Spinner';

import styledComponent from './style';

const { Container } = styledComponent;

function LoadingTemplate() {
   return (
      <Container>
         <Spinner />
      </Container>
   );
}

export default LoadingTemplate;
