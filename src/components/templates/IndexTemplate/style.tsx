import styled from '@emotion/styled';

import ScrollAnimation from 'components/organisms/ScrollAnimation';

const Container = styled.div`
   height: 100%;
   position: relative;
   z-index: 8;
`;

const SlideContainer = ScrollAnimation;

const StyledSlide = styled(ScrollAnimation.Slide)`
   width: 40%;
   min-width: 320px;

   a {
      color: ${({ theme }) => theme.fg.white};
   }
`;

const styledComponent = {
   Container,
   SlideContainer,
   StyledSlide,
};

export default styledComponent;
