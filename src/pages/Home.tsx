import React from 'react';
import styled from '@emotion/styled';

import HomeTemplate from '../components/templates/HomeTemplate';

function Home() {
   return (
      <HomeTemplate>
         <Span>react</Span>
      </HomeTemplate>
   );
}

const Span = styled.span`
   color: ${({ theme }) => theme.fg.danger};
`;

export default Home;
