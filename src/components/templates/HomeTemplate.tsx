import React, { ReactNode } from 'react';
import styled from '@emotion/styled';

interface Props {
   children: ReactNode;
}

function HomeTemplate({ children }: Props) {
   return <Container>{children}</Container>;
}

const Container = styled.div`
   padding: 50px;
`;

export default HomeTemplate;
