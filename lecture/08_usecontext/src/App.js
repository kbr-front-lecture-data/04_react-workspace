import { createContext, useState } from "react";
import ShowName from "./ShowName";
import ChangeName from "./ChangeName";

/* 1) 컴포넌트 분리 전 
function App() {

  const [currentName, setCurrentName] = useState('김철수');
  const names = ['이영희', '박민수', '김철수'];

  return (
    <div>
      <h1>이름 공유 앱</h1>
      <h2>안녕하세요, {currentName}님!</h2>
      <div>
        <div>현재 이름: {currentName}</div>
        {names.map((name, index) => (
          <button onClick={(e) => setCurrentName(name)}>{name}로 변경</button>
        ))}
      </div>
    </div>
  );
}
*/

// 2) 컴포넌트 분리 후 (props로 필요값 매번 전달)
/*
function App() {

  const [currentName, setCurrentName] = useState('김철수');
  const names = ['이영희', '박민수', '김철수'];

  return (
    <div>
      <h1>이름 공유 앱</h1>
      <ShowName currentName={currentName} />
      <ChangeName names={names} currentName={currentName} setCurrentName={setCurrentName} />
    </div>
  );
}
*/

// 3) Context 적용 
export const NameContext = createContext();

function App() {
  
  const [currentName, setCurrentName] = useState('김철수');
  const names = ['이영희', '박민수', '김철수'];

  return (
    <NameContext.Provider 
      value={{
        names: names,
        currentName: currentName,
        setCurrentName: setCurrentName,
      }}>
      <div>
        <h1>이름 공유 앱</h1>
        <ShowName />
        <ChangeName />
      </div>
    </NameContext.Provider>
  );
}

export default App;










/*
  ## React.createContext() ##
  1. 컨텍스트(Context) 객체를 생성하는 구문
  2. 컨텍스트란? 
     컴포넌트에서 제공하거나 읽을 수 있는 정보 
  3. 컴포넌트 트리 전체에 데이터를 전달할 수 있도록 해주는 Context API의 핵심 함수
  4. createContext를 사용하면 여러 단계의 컴포넌트에 props를 일일히 전달하지 않고도(props drilling 회피)
     원하는 값을 하위 컴포넌트에서 바로 사용할 수 있음
     * props drilling : 최상위 컴포넌트부터 하위 컴포넌트로 props를 계속 전달하는 것을 의미함
  5. 컨텍스트 객체에는 Provider와 Consumer 컴포넌트가 포함되어 있음 
    1) Provider 컴포넌트는 value prop을 통해 하위 컴포넌트에 값을 제공함 
       하위 트리의 모든 컴포넌트에서 해당 값을 사용할 수 있음 
    2) 하위 컴포넌트에서는 React.useContext(Context) 또는 Context.Consumer를 통해 값을 읽을 수 있음 
       함수형 컴포넌트에서는 React.useContext(Context) 사용이 더 간편함 
  6. 작성 구문
    1) 형식
      const context = React.createContext(defaultValue);
    2) 설명 
      ① context
        - 컨텍스트(Context) 객체입니다.
        - 컨텍스트 객체가 자체적으로 가진 정보는 없으며 다른 컴포넌트가 읽거나 다른 컴포넌트에게 제공할 정보를 나타냅니다.
      ② defaultValue
        - defaultValue는 상위에 Provider 컴포넌트가 없을 때만 사용되는 기본값입니다.
        - 의미 있는 값이 없는 경우 null 값을 지정합니다.
        - Provider가 명시적으로 undefined를 value로 전달해도 defaultValue가 사용되지는 않습니다.


  ## React.useContext() ##
  1. 컴포넌트에서 컨텍스트(Context)를 구독하여 해당 컨텍스트에 저장된 내용을 확인할 수 있는 훅(Hooks)
  2. Context API를 통해 전역 데이터(ex: 테마, 사용자 정보 등)를 props 없이 여러 컴포넌트에서 공유할 때 사용
  3. useContext(SomeContext)를 호출하면, 트리 상에서 가장 가까운 <SomeContext.Provider>의 value를 반환
  4. Provider가 없으면, createContext에서 지정한 defaultValue를 반환 
     단, Provider가 value로 undefined를 명시적으로 전달하면 undefined가 반환됨
  5. 값이 변경되면, 해당 Context를 구독하는 컴포넌트가 자동으로 리렌더링됨 
  6. 작성 구문 
    1) 형식
      const value = React.useContext(SomeContext);
    2) 설명
      ① value
        - 이 값은 컴포넌트 트리 중 가장 가까운 위쪽 컴포넌트에서 호출한 <SomeContext.Provider>에 전달한 value로 결정합니다.
        - <SomeContext.Provider>는 useContext()를 호출하는 컴포넌트의 부모 컴포넌트에 배치해야 합니다.
      ② SomeContext
        - React.createContext()를 이용해 생성한 컨텍스트입니다.
*/