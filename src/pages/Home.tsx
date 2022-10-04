import React from 'react';

import HomeTemplate from 'components/templates/HomeTemplate';
import Header from 'components/organisms/Header';
import ScrollAnimation from 'components/organisms/ScrollAnimation';

function Home() {
   const { Slide } = ScrollAnimation;
   return (
      <HomeTemplate header={<Header />}>
         <ScrollAnimation>
            <Slide>
               <hgroup>
                  <h1>개발자가 상발자</h1>
                  <h2>THE ODYSSEY OF A FRONT WEB DEVELOPER</h2>
               </hgroup>

               <div>image</div>
               <p>파워 잡캐에서 프론트 개발자</p>
               <p>프론트 개발자에서 풀스택 개발자</p>
            </Slide>
            <Slide>
               <hgroup>
                  <h1>개발자가 상발자</h1>
                  <h2>THE ODYSSEY OF A FRONT WEB DEVELOPER</h2>
               </hgroup>

               <div>image</div>
               <p>파워 잡캐에서 프론트 개발자</p>
               <p>프론트 개발자에서 풀스택 개발자</p>
            </Slide>
            <Slide>
               <hgroup>
                  <h1>개발자가 상발자</h1>
                  <h2>THE ODYSSEY OF A FRONT WEB DEVELOPER</h2>
               </hgroup>

               <div>image</div>
               <p>파워 잡캐에서 프론트 개발자</p>
               <p>프론트 개발자에서 풀스택 개발자</p>
            </Slide>
         </ScrollAnimation>
      </HomeTemplate>
   );
}

export default Home;
