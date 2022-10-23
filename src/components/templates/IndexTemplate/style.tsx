import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { ThemeProps } from 'assets/emotion';

import ScrollAnimation from 'components/organisms/ScrollAnimation';
import { Link } from 'react-router-dom';

const Container = styled.div`
   height: 100%;
   position: relative;
   z-index: 8;
`;

const SlideContainer = ScrollAnimation;

const StyledSlide = styled(ScrollAnimation.Slide)`
   width: 40%;
   min-width: 320px;
`;

const linkStyles = ({ theme }: ThemeProps) => css`
   display: grid;
   grid-template-columns: 35px auto;
   color: ${theme.fg.white};

   span {
      :first-child {
         justify-self: center;
      }
   }
`;

const StyledLink = styled(Link)`
   ${linkStyles};
`;

const StyledAnchor = styled.a`
   ${linkStyles}
`;

const styledComponent = {
   Container,
   SlideContainer,
   StyledSlide,
   StyledLink,
   StyledAnchor,
};

export default styledComponent;
