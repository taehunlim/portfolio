import React, { ReactNode } from 'react';
import styled from '@emotion/styled';

import StarTemplate from 'components/templates/StarTemplate';

interface Props {
   children: ReactNode;
}

function HomeTemplate({ children }: Props) {
   return (
      <StarTemplate>
         <Wrapper>{children}</Wrapper>
      </StarTemplate>
   );
}

const Wrapper = styled.div`
   padding: 50px;
`;
export default HomeTemplate;
