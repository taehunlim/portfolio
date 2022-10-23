import React from 'react';

import StarTemplate from 'components/templates/StarTemplate';
import Icon from 'components/atoms/Icon';

import styledComponent from './style';

const { Container, SlideContainer, StyledSlide, StyledLink, StyledAnchor } =
   styledComponent;

function IndexTemplate() {
   return (
      <StarTemplate>
         <Container>
            <SlideContainer>
               <StyledSlide>
                  <hgroup>
                     <h1>개발자가 상발자</h1>
                     <h2>THE ODYSSEY OF A FRONT WEB DEVELOPER</h2>
                  </hgroup>

                  <div>image</div>
                  <p>3년차 개발자의 삽질 여정기</p>
                  <p>오늘도 삽질하며 깊이를 판다</p>
               </StyledSlide>
               <StyledSlide>
                  <hgroup>
                     <h1>💪 Technical Skills</h1>
                  </hgroup>
                  <p>vanilaJS, React, typescript</p>
                  <p>nodeJS, espressJS, mongoDB, postman</p>
                  <p>sass,styled-component, emotion-component</p>
                  <p>bootstrap, antd</p>
                  <p>Redux, recoil</p>
                  <p>useSWR, react-query</p>
                  <p>webpack, babel, vite</p>
                  <p>jest</p>
               </StyledSlide>
               <StyledSlide>
                  <hgroup>
                     <h1>💻 경력</h1>
                  </hgroup>
                  <p>2020 ~ 2021 프리랜서</p>
                  <p>2021 ~ 2022 피프틴에이치</p>
                  <p>2022 ~ 현재 웹웨어</p>
               </StyledSlide>
               <StyledSlide>
                  <hgroup>
                     <h1>Contacts</h1>
                  </hgroup>
                  <p>📞 +82 </p>
                  <p>✉️ naver.com</p>
               </StyledSlide>
               <StyledSlide>
                  <StyledLink to="/about">
                     <span>🙋🏻‍♂️</span> <span>ABOUT ME</span>
                  </StyledLink>
                  <p>
                     <StyledAnchor
                        href="https://github.com/taehunlim"
                        target="blank"
                     >
                        <Icon icon="github" height={21} /> <span>GITHUB</span>
                     </StyledAnchor>
                  </p>
               </StyledSlide>
            </SlideContainer>
         </Container>
      </StarTemplate>
   );
}

export default IndexTemplate;
