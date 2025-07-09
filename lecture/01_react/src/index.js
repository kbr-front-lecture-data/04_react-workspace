import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>

  /*
    ## <React.StrictMode> ##
    리액트앱의 잠재적인 문제를 조기에 발견할 수 있도록 도와주는 개발 전용 도구 
    해당 컴포넌트로 감싸면 하위 모든 컴포넌트에 대해 추가적인 검사와 경고가 활성화됨
    실제 UI에는 아무 영향을 주지 않으며, 개발 환경에서만 동작함
    배포(프로덕션) 환경에서는 자동으로 비활성화 되어 성능에 영향을 주지 않음 

    주요 기능 
    - 잠재적 버그 및 비효율 코드 조기 발견 
    - 컴포넌트의 순수성 검증 
    - 경고 및 안내 메세지 출력 
    - 앱 전체 또는 특정 컴포넌트에만 적용 가능 
  */
);

/*
  1. 리액트 앱(프로젝트)을 만들고자 하는 위치로 이동 (cd 위치)
  2. cra 이용하여 프로젝트 생성 (npx create-react-app 프로젝트명)
      => 만일 맥에서 permission denied 같은 오류가 날 경우 sudo chown -R $(whoami) ~/.npm 실행 
  3. 프로젝트 폴더로 이동 (cd 프로젝트)
  4. 리액트 앱 구동 (npm start)

  ## 구동 원리 ##   
*/
