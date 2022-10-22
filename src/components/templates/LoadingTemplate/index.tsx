import React from 'react';
import styled from '@emotion/styled';

import Spinner from 'components/atoms/Spinner';

function LoadingTemplate() {
   return (
      <Container>
         <Spinner />
      </Container>
   );
}

const Container = styled.div`
   position: absolute;
   background-color: #1d1d1d;
   height: 100vh;
   width: 100%;
`;

export default LoadingTemplate;
