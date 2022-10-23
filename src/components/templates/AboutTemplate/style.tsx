import styled from '@emotion/styled';

const Container = styled.div`
   h1 {
      margin-top: 0;
      font-size: 70px;
   }

   position: relative;
   z-index: 9;
   min-height: 100vh;
   padding: 100px;
   display: grid;
   gap: 50px;
   grid-template-columns: 1fr 1fr;
   align-items: center;

   @media (max-width: ${({ theme }) => theme.deviceSize.tablet}) {
      grid-template-columns: auto;
      padding: 30px;
      margin-top: 80px;
   }
`;

const IconContainer = styled.div`
   display: grid;
   grid-template-columns: repeat(auto-fill, minmax(100px, 25%));
   gap: 70px 0;
`;

const IconBox = styled.div`
   text-align: center;
   p {
      margin-bottom: 0;
   }
`;

const styledComponent = {
   Container,
   IconContainer,
   IconBox,
};

export default styledComponent;
