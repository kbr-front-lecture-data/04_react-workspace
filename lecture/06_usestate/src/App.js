import React, { useState } from "react";
import Example1 from "./Example1";
import Example2 from "./Example2";
import Example3 from "./Example3";
import Example4 from "./Example4";
import Example5 from "./Example5";
import Example6 from "./Example6";
import Practice from "./Practice";

function App() {

  // const [number, setNumber] = React.useState();
  const [number, setNumber] = useState(0);

  const increaseHandler = (e) => {
    // number = number + 1;      // state 변수를 직접 수정하면 안됨 
    // setNumber(number + 1);    // 1) 직접 값을 전달하는 방식
    setNumber(prev => prev + 1); // 2) 기존값을 받아 새로운 값을 반환하는 함수를 전달하는 방식 (함수형 업데이트)
  };

  const decreaseHandler = (e) => {
    // number = number - 1;
    // setNumber(number - 1);
    setNumber(prev => prev - 1);
  };
  

  return (
    <div>

      <h1>{number}</h1>
      <button onClick={increaseHandler}>🔼</button>
      <button onClick={decreaseHandler}>🔽</button>

      <hr />

      <Example1 />
      <hr />
      <Example2 />
      <hr />
      <Example3 />
      <hr />
      <Example4 />
      <hr />
      <Example5 />
      <hr />
      <Example6 />
      <hr />

      <Practice />


    </div>
  );
}

export default App;

/*
  ## state (상태) ##
  1. 컴포넌트 내부에서 관리되는 동적인 데이터를 의미
  2. 컴포넌트의 state는 시간이 지남에 따라, 또는 사용자와의 상호작용에 따라 변경될 수 있음 
      → state가 변경되면 해당 컴포넌트와 그 자식 컴포넌트가 자동으로 다시 재렌더링 됨 
  3. 클래스형 컴포넌트는 state를 직접 사용할 수 있으나 
     함수형 컴포넌트는 v16.8 이후 React.useState() 훅(Hooks)을 이용해서 state를 사용할 수 있음 
  

  ## React.useState() ##
  1. 함수형 컴포넌트에서 상태(state)를 선언하고 관리하기 위한 훅(Hooks)
     상태란? 컴포넌트가 렌더링되는 동안 값이 변할 수 있는 데이터를 의미
  2. useState는 배열을 반환하며, 반환하는 배열의 첫 번째 요소는 현재 상태 값, 두 번째 요소는 상태 값을 변경하는 함수 
  3. 리액트는 앞으로 주요 개발 방식으로 useState() 함수를 사용할 것이라고 발표하였음 
  4. 작성 구문 
    1) 형식
      const [state, setState] = React.useState(initialState);
    2) 설명
      ① state
        - 상태 변수의 이름입니다.
        - 모든 타입의 값을 가질 수 있습니다.
        - state가 변하면 리렌더링됩니다.
      ② setState
        - 상태 변수 값을 변경하는 상태 업데이트 함수입니다.
      ③ initialState
        - 상태 변수의 초깃값입니다.
  5. 상태 업데이트 함수의 두가지 방식 
    1) 값을 직접 전달하는 방식
    2) 함수(이전 값을 받아 새로운 상태 값을 반환하는 함수)를 전달하는 방식 (함수형 업데이트)
*/
