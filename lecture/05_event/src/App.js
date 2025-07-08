import Practice from "./Practice";

function App() {

  const onClickHandler = () => {
    alert('Clicked Button!');
  }

  return (
    <div>
      {/* 1) 콜백을 이용한 이벤트 핸들러 직접 작성 */}
      <button onClick={() => alert('Clicked First Button!')}>버튼1</button>
      <br />
      {/* 2) 이벤트 핸들러 별도 작성 후 이벤트 속성으로 전달 */}
      <button onClick={onClickHandler}>버튼2</button>
      <button onClick={onClickHandler}>버튼3</button>
      <br />
      {/* 3) 컴포넌트로 이벤트핸들러 전달하기 */}
      <ButtonComp onClick={onClickHandler} name={"제출"} />
      <ButtonComp onClick={() => alert('Reset!!')} name={"초기화"} />

      <hr />

      <Practice />  
    </div>
  );
}

function ButtonComp({onClick, name}) {
  return <input type="button" value={name} onClick={onClick} />
}

export default App;

/*
  ## React Event ##
  1. 이벤트는 사용자가 웹 브라우저에서 DOM 요소와 상호작용할 때 발생하는 사건 (클릭, 입력, 마우스 이동 등)
  2. 리액트는 자체적인 합성 이벤트 시스템을 사용하여 브라우저 호환성과 성능을 높이고, 개발자가 일관된 방식으로 이벤트를 처리할 수 있게 해줌
  3. 주요 특징 
    1) 합성 이벤트(Synthetic Event)
      (1) 리액트의 이벤트는 브라우저의 기본 이벤트를 감싸는 합성 이벤트입니다.
      (2) W3C 명세를 따르며, 브라우저 간 호환성을 신경 쓸 필요가 없습니다.
      (3) 이벤트 객체는 브라우저의 원래 이벤트와 동일한 인터페이스를 제공합니다.
    2) 이벤트 속성 이름 표기법
      (1) HTML에서는 소문자(onclick, onchange)를 사용합니다.
      (2) 리액트에서는 camelCase 방식(onClick, onChange)으로 작성합니다.
    3) 이벤트 핸들러 전달 방식
      (1) 이벤트 핸들러는 이벤트 발생 시 실행할 코드를 작성해 놓은 함수입니다.
      (2) HTML에서는 함수를 문자열로 전달하지만, 리액트에서는 함수를 중괄호({})로 전달합니다.
      (3) 함수명 뒤에 괄호를 붙이지 않고 함수 참조만 전달해야 합니다. 괄호를 붙이면 즉시 실행됩니다.
      (4) 예시
        HTML-------  <button onclick="onClickHandler()">클릭</button>
        React------  <button onClick={onClickHandler}>클릭</button>
    4) 이벤트 객체
      (1) 이벤트가 발생하면 이벤트 핸들러 함수의 첫 번째 인자로 이벤트 객체가 전달됩니다.
      (2) 이벤트 객체는 이벤트가 발생한 요소, 입력 값 등 다양한 정보를 담고 있습니다.
    5) 이벤트 위임 및 최적화
      (1) 리액트는 이벤트 위임 방식을 사용해 전체 앱에서 소수의 이벤트 리스너만으로 효율적으로 이벤트를 처리합니다.
      (2) 이벤트는 루트 컨테이너에서 캡처되어 필요한 컴포넌트로 전달됩니다.
    6) 이벤트 전파(이벤트 버블링)
      (1) 자식 요소의 이벤트가 상위 요소로 전파되는 것을 이벤트 전파라고 합니다.
      (2) 이벤트 객체의 stopPropagation() 메소드를 이용해 이벤트 전파를 제어할 수 있습니다.
    7) 기본 이벤트 취소
      (1) <a> 태그의 링크 이동, <form> 태그의 서브밋 등 기본 이벤트 동작이 존재합니다.
      (2) 이벤트 객체의 preventDefault() 메소드를 이용해 기본 이벤트 실행을 취소할 수 있습니다.
    8) props로 이벤트 핸들러 전달
      (1) 이벤트 핸들러도 props로 자식 컴포넌트에 전달할 수 있습니다.

*/
