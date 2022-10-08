import React from 'react';

import StarTemplate from '../StarTemplate';
import Icon from 'components/atoms/Icon';

import styledComponent from './style';

const { Container, IconContainer, IconBox } = styledComponent;

function AboutTemplate() {
   return (
      <StarTemplate>
         <Container>
            <div>
               <h1>About Me</h1>
               <p>
                  WEP Front-End developer 임태훈 입니다. 정비사로 군 복무중
                  개발에 흥미가 생겨 중사 전역 후 웹개발 시장에 뛰어들었습니다.
               </p>
               <p>
                  필요한 기술 스택과 보일러 플레이트를 선정하여 프로젝트를 처음
                  부터 끝까지 설게가 가능하며,
                  <br />
                  그저 동작하는 코드가 아닌 잘 동작하는 코드 및 업무 효율을 위해
                  끝임없이 고민합니다.
               </p>
               <p>
                  프리랜서 경험과 스타트업에서 다양한 웹과 앱 서비스를 개발/리드
                  경험 및 코드 리뷰를 진행한 경험이 있습니다.
               </p>
               <p>
                  Node.js(express.js), mongoDB를 사용해 풀스택 개발이 가능하며,
                  api 개발 및 문서화가 가능합니다.
               </p>
               <p>
                  TDD를 통해 버그를 최소화 하여 코드 품질 향상 및 더 나은
                  유지보수를 위해 노력합니다.
               </p>
               <p>
                  Webpack, babel, vite를 사용해 CRA 없이 React 개발 환경 구축이
                  가능합니다.
               </p>
               <p>
                  React 개발에 가장 익숙하며, 전 회사에서 외부 업체 라이브러리
                  사용시
                  <br />
                  동료 개발자들에게 바닐라JS 코드를 리액트에서 사용 가능하도록
                  <br />
                  컴포넌트화 및 가이드 라인을 제공한 경험이 있습니다.
               </p>
               <p>
                  prop-types와 typescript를 통한 타입선언 개발에 익숙하며,
                  <br />
                  장점을 적극 활용함으로써 더 나은 디버깅과 유지 보수 환경을
                  제공하려고 노력합니다.
               </p>
               <p>
                  code-splitting을 통해 React(SPA)의 단점인 초기 로딩 속도 및
                  비용과,
                  <br />
                  SEO 문제를 개선하여 프로젝트를 설계합니다.
               </p>
               <p>
                  에이전시 경험을 통해 React 특성에 맞는 재사용 가능한 컴포넌트
                  및
                  <br />
                  클린코드 작성에 더 많은 관심을 가지게 되었습니다.
               </p>
               <p>
                  Presentational & Container / Atomic design 패턴 개발에
                  익숙합니다.
               </p>
            </div>
            <IconContainer>
               <IconBox>
                  <Icon icon="html5" width={70} />
                  <p>HTML5</p>
               </IconBox>
               <IconBox>
                  <Icon icon="css3-alt" width={70} />

                  <p>CSS3</p>
               </IconBox>
               <IconBox>
                  <Icon icon="sass" width={70} />

                  <p>SASS</p>
               </IconBox>
               <IconBox>
                  <Icon icon="js" width={70} />

                  <p>JavaScript</p>
               </IconBox>
               <IconBox>
                  <Icon icon="react" width={70} />

                  <p>React</p>
               </IconBox>
               <IconBox>
                  <Icon icon="git-alt" width={70} />

                  <p>Git</p>
               </IconBox>
               <IconBox>
                  <Icon icon="github" width={70} />

                  <p>Github</p>
               </IconBox>
               <IconBox>
                  <Icon icon="restful" width={70} />

                  <p>RESTful APIs</p>
               </IconBox>
            </IconContainer>
         </Container>
      </StarTemplate>
   );
}

export default AboutTemplate;
