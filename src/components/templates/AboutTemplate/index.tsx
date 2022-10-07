import React from 'react';

import StarTemplate from '../StarTemplate';

import styledComponent from './style';

const { Wrapper } = styledComponent;

function AboutTemplate({ children }: any) {
   return (
      <StarTemplate>
         <Wrapper>{children}</Wrapper>
      </StarTemplate>
   );
}

export default AboutTemplate;
