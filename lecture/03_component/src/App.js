
// * 컴포넌트 분리 전
/*
function App() {

  const handleMouseEnter = () => console.log('마우스가 들어왔습니다.');
  const handleMouseLeave = () => console.log('마우스가 나갔습니다.');

  const fruits = ['사과', '바나나', '오렌지'];

  const students = [
    {id: 1, name: '김철수', age: 20},
    {id: 2, name: '이영희', age: 22},
    {id: 3, name: '박민수', age: 21},
  ];


  return (
    <>

      <div 
        onMouseEnter={handleMouseEnter} 
        onMouseLeave={handleMouseLeave}>마우스를 올려보세요.</div>

      <ul>
        {fruits.map((fruit, index) => {
          return <li>{fruit}</li>
        })}
      </ul>

      <div>
        <h2>학생 목록</h2>
        {students.map((student, index) => 
          <p>
            이름: {student.name} <br/>
            나이: {student.age}세
          </p>
        )}
      </div>

    </>
  );
}
*/

// 외부 컴포넌트는 import 후 사용 가능 
import StudentList from "./StudentList";

// * 컴포넌트 분리 후 
function App() {

  return (
    <>
      <Mouse />
      <FruitList />
      <StudentList />
    </>
  );
}

// 내부 컴포넌트 만들기 
function Mouse(){

  const handleMouseEnter = () => console.log('마우스가 들어왔습니다.');
  const handleMouseLeave = () => console.log('마우스가 나갔습니다.');

  return (
    <div 
        onMouseEnter={handleMouseEnter} 
        onMouseLeave={handleMouseLeave}>마우스를 올려보세요.</div>
  );

}

function FruitList() {

  const fruits = ['사과', '바나나', '오렌지'];

  return (
    <ul>
        {fruits.map((fruit, index) => {
          return <li>{fruit}</li>
        })}
      </ul>
  );
}

export default App;

/*
  ## component (컴포넌트) ##
  1. 컴포넌트는 특정 기능이나 UI를 담당하는 독립적인 코드 블럭
  2. 여러 개의 Element를 조합하여 더 큰 UI 단위를 만들 수 있으며, 재사용이 가능함
  3. 컴포넌트는 props와 state를 통해 동적인 데이터를 다루고, 상태(state)가 변경될 때마다 자동으로 다시 렌더링됨
  4. 컴포넌트의 이름은 PascalCase 방식을 따름
  5. 클래스형 컴포넌트의 render함수(혹은 함수형 컴포넌트의 반환값)는 React Element를 반환함 
  6. JSX와 React컴포넌트의 관계
    1) React 컴포넌트는 JSX를 반환하며, JSX는 컴포넌트 내부에서 UI를 선언적으로 정의하는 역할을 합니다.
    2) JSX를 사용하지 않을 경우, React.createElement 함수를 직접 호출해야 하므로 코드가 복잡해집니다.
  7. 컴포넌트 합성 
    1) 컴포넌트는 다른 컴포넌트를 이용해 구성할 수 있습니다.
    2) 가능한 컴포넌트를 작게 만들어서 사용하는 것이 좋습니다.
    3) 리액트에서는 버튼, 폼 등 대부분의 구성 요소를 컴포넌트로 만들어서 사용합니다.
  8. 함수형 컴포넌트와 클래스형 컴포넌트 두 가지 방식으로 정의 가능
    1) 클래스형 컴포넌트
      ① JavaScript 클래스를 이용합니다.
      ② state와 life cycle API를 사용할 수 있습니다.
      ③ 상대적으로 복잡합니다.
      ④ React.Component를 상속 받아서 작성합니다.
      ⑤ render() { return 엘리먼트 } 형식으로 화면에 표시할 엘리먼트를 반환합니다.
      ⑥ 예시 : class Welcome extends React.Component { ... }
    2) 함수형 컴포넌트 
      ① JavaScript 함수를 이용합니다.
      ② 함수형 컴포넌트는 최초엔 state와 life cycle API를 사용할 수 없었습니다.
      ③ React v16.8 이후로 state와 life cycle API를 훅(hooks)을 통해 사용할 수 있습니다.
      ④ 상대적으로 간결합니다.
      ⑤ 리액트 개발자 진영에서는 함수형 컴포넌트 사용을 권장합니다.
      ⑥ 예시 : function Welcome(props) { ... }
*/