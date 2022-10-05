import React from 'react';
import styled from '@emotion/styled';

import HomeTemplate from 'components/templates/HomeTemplate';
import Header from 'components/organisms/Header';
import ScrollAnimation from 'components/organisms/ScrollAnimation';

function Home() {
   return (
      <HomeTemplate header={<Header />}>
         <ScrollAnimation>
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
                  <h1>Contacts</h1>
               </hgroup>

               <p>📞 +82 </p>
               <p>✉️ naver.com</p>
            </StyledSlide>
         </ScrollAnimation>
      </HomeTemplate>
   );
}

const StyledSlide = styled(ScrollAnimation.Slide)`
   width: 40%;
`;

export default Home;
