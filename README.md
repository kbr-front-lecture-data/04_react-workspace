# B-1_React.js
## 1. 개요 및 환경 설정
<br>

### 1-1-1. React의 역사
- Facebook의 소프트웨어 엔지니어 Jordan Walke에 의해 만들어졌다
    - 예전의 페이스북은 UI가 복잡해지면서 재사용 가능한 UI 컴포넌트의 필요성을 느꼈다
- PHP의 프레임워크인 XHP의 영향을 받아 2011년 처음으로 게시되었다
- 2012년에 인스타 그램에 배치 되었고
- 2013년 5월, 미국 JSConf에서 오픈 소스로 제작이 되었다
- 2017년 4월, 사용자 인터페이스를 위한 프레임워크 라이브러리 알고리즘 React Fiber를 발표 했다
<br><br><br>
<hr>
<br><br>

### 1-1-2. React의 특징
- Virtual DOM을 사용해 빠르고 효율적인 UI 렌더링을 제공한다
    - 실제 웹페이지의 DOM을 직접 조작하는 대신 가상의 DOM을 만들어 미리 계산하고 필요한 부분만 반영하는 방식이다
- 단방향 데이터 흐름으로 데이터의 흐름을 예측 가능하게 만든다
- 컴포넌트 기반 아키텍처로 독립적인 사용과 재사용이 가능하게 만든다
<br><br><br>
<hr>
<br><br>

### 1-1-3. React의 기본 개념
- JSX
    - React에서 UI를 구성하는데 사용하는 JavaScript의 확장 문법이다
    - JSX 표현식은 필수로 단일 루트 요소를 반환해야 한다
    <br><br>

- 엘리먼트(Element)
    - 요소 노드, 어트리뷰트 노드, 텍스트 노드로 만들어지는 가상 DOM이다
    - React는 이 객체를 해석해 HTML로 렌더링 후 브라우저에 띄워준다
<br><br>

- 컴포넌트(Component)
    - 엘리먼트를 반환하는 화면의 구성 단위이다
<br><br><br>
<hr>
<br><br>

### 1-1-4. React의 동작 원리
- MPA (Multiple Page Application)
    - 일반적으로는 MPA 방식으로 한 페이지에서 다른 페이지로 이동할 경우 전체 컨텐츠를 리로딩 하는 방식으로 연결이 되어 있었다
        <img src="./image/React MPA (1).png">
    - 사소한 버튼 클릭도 항상 전체 페이지를 렌더링 하기 때문에 성능에 이슈가 많았다
    <br><br>
    
- SPA (Single Page Application)
    - 그래서 전체 앱을 로드하는 게 아닌 필요한 요소만을 로드하는 새로운 어플리케이션 형태가 나타나게 되었다
        <img src="./image/React SPA.png">
    - 한 개의 `index.html`만 두고 JavaScript의 DOM 조작으로 안의 내용을 채우게 된다
    - 정적 리소스를 최초로 접근할 때 한 번만 다운로드 하고 새로운 페이지를 요청하면 필요한 요소만 로드 한다
        - 이렇게 필요한 요소만 로드 하기 위해 json 데이터를 사용한다
    <br><br>
        
- DOM을 사용자가 직접 하나하나 조작하기는 어렵다 그래서 React에서는 Virtual DOM이라는 가상 DOM을 사용한다
    - 가상 DOM은 변화를 감지하면 재조정 과정을 통해 실제 DOM과 동기화 한다
        1. UI에서 변경을 감지하면 UI를 가상 DOM으로 렌더링 한다 (비교를 위한 가상 렌더링)
        2. 갱신된 현재 가상 DOM과 이전 가상 DOM을 비교해 차이를 계산한다 (이를 diffing이라고 한다)
        3. 변경된 부분만을 실제 DOM에 반영한다 
    <br><br>

- 실제 DOM에 반영하기 위한 웹 브라우저의 렌더링 엔진 동작 과정
    <img src="./image/React 동작 과정.png">
    
    1. CSS와 HTML을 파싱 해서 각각 CSSDOM 트리, DOM 트리를 생성한다
        - 텍스트인 HTML을 DOM 트리 구조의 객체로 변환 시켜서 브라우저와 JavaScript가 이해할 수 있는 구조로  HTML Parser가 DOM으로 바꿔준다
        - CSSDOM도 CSS Parser로 DOM에 CSS를 입힌 객체 모델을 말한다
    2. 두 개의 트리를 결합해 Render 트리를 생성한다
        - Render 트리란 HTML과 CSS 정보를 결합한 실제로 보여줄 요소들을 포함한 트리이다
    3. 각 노드의 위치와 크기를 계산해 화면 상의 픽셀로 변환하고 레이어를 생산한다
    4. 레이어를 생성해 실제 화면에 표시한다
<br><br><br>
<hr>
<br><br>

### 1-1-5. React 환경 설정
- React 개발에 도움이 되는 플러그인을 VScode에 추가한다
    - live server 플러그인
        - 화면 구현 시 수정 사항을 웹 브라우저에서 바로 확인하기 위해 플러그인을 설치한다
    
    <img src="./image/React 라이브 서버 익스텐션.png">
    <br><br>

- React 파일 만들기
    1. TERMINAL 창에 `npx create-react-app 프로젝트명`을 입력한다
        - 에러가 발생할 경우 참고
            
            [https://velog.io/@bboyooning/VSCode-오류-npx-이-시스템에서-스크립트를-실행할-수-없으므로-](https://velog.io/@bboyooning/VSCode-%EC%98%A4%EB%A5%98-npx-%EC%9D%B4-%EC%8B%9C%EC%8A%A4%ED%85%9C%EC%97%90%EC%84%9C-%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EB%A5%BC-%EC%8B%A4%ED%96%89%ED%95%A0-%EC%88%98-%EC%97%86%EC%9C%BC%EB%AF%80%EB%A1%9C-)
            
    2. `OK to proceed?`가 뜨면 `y`를 입력하고 엔터를 누른다
        
        <img src="./image/REACT 설정.png">
        <br><br>
        
    3. 폴더가 이렇게 생성되면 성공적으로 React 개발 환경이 생성된 것이다
        
        <img src="./image/react 환경 생성 완료.png">
        
    4. 생성된 프로젝트 파일로 이동 후 TERMINAL에 `npm start`를 입력 후, “localhost:3000”에 접속해보자
        
        <img src="./image/npm start.png">