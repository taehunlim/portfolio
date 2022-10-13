import styled from '@emotion/styled';

const Container = styled.div`
   align-self: center;
`;

const ButtonContainer = styled.div`
   display: grid;
   gap: 30px;
`;

const KaleidoscopeWrapper = styled.div`
   position: absolute;

   top: 0;
   bottom: 0;
   left: 0;
   right: 0;
   margin: auto;

   display: inline-table;
   justify-content: center;
   text-align: center;
`;

const styledComponent = {
   Container,
   ButtonContainer,
   KaleidoscopeWrapper,
};

export default styledComponent;
