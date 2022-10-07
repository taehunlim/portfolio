import React, { ReactNode } from 'react';

import StarTemplate from 'components/templates/StarTemplate';

import styledComponent from './style';

const { Wrapper } = styledComponent;

interface Props {
   children: ReactNode;
}

function IndexTemplate({ children }: Props) {
   return (
      <StarTemplate>
         <Wrapper>{children}</Wrapper>
      </StarTemplate>
   );
}

export default IndexTemplate;
