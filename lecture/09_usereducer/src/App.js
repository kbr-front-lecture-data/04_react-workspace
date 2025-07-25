import { useReducer, useState } from "react";
import counterReducer from "./counterReducer";

/* 1) 상태관리를 컴포넌트 내에서 진행 
function App() {
  const [count, setCount] = useState(0);
  const increaseCount = (e) => setCount(count + 1);
  const decreaseCount = (e) => setCount(count - 1);
  const resetCount = (e) => setCount(0);
  return (
    <div>
      <h2>카운터: {count}</h2>
      <button onClick={increaseCount}>+1 증가</button>
      <button onClick={decreaseCount}>-1 감소</button>
      <button onClick={resetCount}>초기화</button>
    </div>
  );
}
*/

// 2) 상태 관리를 reducer 활용하여 외부로 분리 
function App() {
  const [state, dispatch] = useReducer(counterReducer, {count: 0});

  return (
    <div>
      <h2>카운터: {state.count}</h2>
      <button onClick={() => dispatch({type: 'INCREASE'})}>+1 증가</button>
      <button onClick={() => dispatch({type: 'DECREASE'})}>-1 감소</button>
      <button onClick={() => dispatch({type: 'RESET'})}>초기화</button>
    </div>
  );
}

export default App;

/*
  ## React.useReducer() ##
  1. 함수형 컴포넌트에서 복잡한 상태 관리를 위해 사용되는 훅(Hooks)
  2. useState와 유사하게 상태를 관리하지만, 상태 변화 로직을 컴포넌트 외부로 분리해 
     더 체계적이고 예측 가능한 방식으로 상태를 업데이트할 수 있습니다. 
  3. 주요 특징 
    1) 복잡한 상태 관리에 적합 
      ▶︎ 여러 값이 포함된 복잡한 상태, 상태 간의 관계가 복잡한 경우, 혹은 다양한 액션에 따라 상태를 업데이트 할 때 유용
    2) 상태 변경 로직의 분리
      ▶︎ 상태를 변경하는 로직(reducer 함수)을 컴포넌트 외부에 정의할 수 있어 코드 일관성과 유지보수성이 높아짐
    3) Redux와 유사한 패턴 
      ▶︎ dispatch를 통해 액션을 전달하고, reducer 함수에서 액션 타입에 따라 상태를 업데이트 함
      ▶︎ 해당 패턴은 Redux와 비슷해, 전역 상태 관리에도 확장하기 쉬움 
  4. 작성 구문 
    1) 형식 
      const [state, dispatch] = React.useReducer(reducer, initialArg, init?);
    2) 설명 
      ① state
        - 현재 상태 값을 의미합니다.
      ② dispatch
        - 액션(action)을 발생시키는 함수입니다.
        - 액션을 인자로 가지며 반환은 없습니다.
        - 액션은 reducer 함수의 두 번째 인자로 전달됩니다.
      ③ 액션(action) 객체
        - 사용자에 의해서 수행되는 활동을 의미하는 객체입니다.
        - 일반적으로 type 프로퍼티에 action을 정의하는 값을 할당합니다. 추가적인 정보를 저장하려면 기타 프로퍼티를 추가해서 사용합니다.
      ④ reducer
        - 상태와 액션을 받아 새로운 상태를 반환하는 함수입니다.
        - 상태와 액션을 인자로 받고 새로운 상태를 반환합니다.
        - 반드시 순수 함수여야 합니다. (reducer 함수 내부에서 상태와 액션 값이 변하면 안 됩니다.)
      ⑤ initialArg
        - 초기 상태 값입니다. 3번째 인자 init 함수가 존재하면 해당 함수에 의해서 초기 상태 값이 결정됩니다.
      ⑥ init
        - 초기 상태 값을 반환하는 함수입니다. 생략하면 2번째 인자인 initialArg에서 결정한 값을 초기 상태 값으로 가집니다.
*/
