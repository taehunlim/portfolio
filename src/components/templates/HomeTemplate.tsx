import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

import StarTemplate from 'components/templates/StarTemplate';

interface Props {
   header: ReactNode;
   children: ReactNode;
}

function HomeTemplate({ header, children }: Props) {
   return (
      <StarTemplate>
         {header}
         <Wrapper>{children}</Wrapper>
      </StarTemplate>
   );
}

const Wrapper = styled.div`
   height: 100%;
`;

export default HomeTemplate;
