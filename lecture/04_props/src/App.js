import NameCard from "./NameCard";

function App() {

  const people = [
    {id: 1, name: '홍길동', phone: '010-1111-2222'},
    {id: 2, name: '김철수', phone: '010-2222-3333'},
    {id: 3, name: '강개순', phone: '010-4444-5555'},
  ]

  return (
    <>
      {/* 매번 동일한 형태의 Element 집합 (단, 내용만 다름) => Component로 분리 */}
      {
        /*
          <h1>
            <div>이름: 홍길동</div>
            <div>연락처: 010-1111-2222</div>
          </h1>

          <h1>
            <div>이름: 김철수</div>
            <div>연락처: 010-2222-3333</div>
          </h1>

          <h1>
            <div>이름: 강개순</div>
            <div>연락처: 010-4444-5555</div>
          </h1>
        */
      }

      {/* 1) props 테스트 */}
      {
        /*
          <NameCard name="홍길동" phone="010-1111-2222" />
          <NameCard name="김철수" phone="010-2222-3333" />
          <NameCard name="강개순" phone="010-4444-5555" />
          <NameCard /> 
        */
      }

      {/* 2) key props 테스트 */}
      {
        people.map((person, index) => (
          <NameCard key={person.id} name={person.name} phone={person.phone} />
        ))
      }

    </>
  );
}

export default App;

/*
  ## props (properties) ##
  1. 리액트에서 컴포넌트 간에 데이터 전달시 사용하는 객체
  2. 주로 부모 컴포넌트가 자식 컴포넌트에게 데이터나 설정값을 넘겨줄 때 활용
      → 컴포넌트의 동작과 렌더링 결과를 동적으로 제어할 수 있음 
  3. props 주요 특징 
    1) 데이터 전달 통로
      ① props는 상위(부모) 컴포넌트에서 하위(자식) 컴포넌트로 데이터를 전달하는 역할을 합니다. 
      ② JSX에서 HTML 속성처럼 작성하며, 자식 컴포넌트에서는 함수의 매개변수(파라미터)로 전달받아 사용할 수 있습니다.
    2) 읽기 전용(불변성)
      ① props는 컴포넌트 내부에서 변경할 수 없는 읽기 전용 속성입니다.(immutable)
      ② 자식 컴포넌트는 props의 값을 직접 수정할 수 없으며, 오직 부모 컴포넌트에서만 값을 바꿀 수 있습니다. 
          → 데이터 흐름이 예측 가능해집니다.
      ③ 컴포넌트로 전달된 props의 값을 수정할 수 없으므로 함수형 컴포넌트의 경우 
         순수 함수(전달된 인자 값을 수정하지 않아 동일한 입력에 대해서는 동일한 출력을 가지는 함수)의 특성을 가지게 됩니다
    3) 컴포넌트 재사용성 향상
      ① props를 활용하면 하나의 컴포넌트를 다양한 데이터와 설정으로 재사용할 수 있습니다. 
      ② 예를 들어, 같은 버튼 컴포넌트에 다른 텍스트, 색상, 동작 등을 props로 넘겨 다양하게 활용할 수 있습니다.
    4) 동적 렌더링과 자동 업데이트
      ① 부모 컴포넌트에서 전달한 props 값이 변경되면, 해당 props를 사용하는 자식 컴포넌트는 자동으로 리렌더링됩니다.
      ② 이를 통해 동적인 UI 구현이 가능합니다.
  4. 개념 이해
    1) 컴포넌트 : 붕어빵 틀
    2) 엘리먼트 : 붕어빵
    3) props    : 붕어빵 재료 (props는 컴포넌트(붕어빵 틀)에 전달되는 데이터(재료)로, 다양한 결과물을 만들어낼 수 있게 해줍니다.)


  * props 기본 사용법
    1) 전달
      ① JSX에서 HTML 속성처럼 컴포넌트에 값을 전달합니다.
      ② 예시
        <ChildComponent greeting="Hello, World!" />
    2) 접근
      ① 함수형 컴포넌트에서는 매개변수로, 클래스형 컴포넌트에서는 this.props로 접근합니다.
      ② 예시
        //--------- 함수형 컴포넌트
        function ChildComponent(props) {
          return <h1>{props.greeting}</h1>;
        }
        //--------- 클래스형 컴포넌트
        class ChildComponent extends React.Component {
          render() {
            return <h1>{this.props.greeting}</h1>;
          }
        }


  * props 추가 사용법
    1) props 객체를 객체 구조 분해 할당으로 간결하게 사용할 수 있음
      예시)
      function ChildComponent({ color, name }) {
        return <div style={{ color }}>{ name }</div>;
      }
    2) defaultProps를 이용해 props가 전달되지 않았을 때 사용할 기본값을 설정할 수 있음
      예시)
      function ChildComponent({ color="green", name="이름없음" }) {
        return <div style={{ color }}>{ name }</div>;
      }
    3) 컴포넌트 태그 사이에 들어가는 내용을 props.children으로 접근할 수 있음 
      예시)
      function ChildComponent({ children }) {
        return <div>{ children }</div>;
      }

  
  * key props
    1) 리스트 렌더링 시 각 항목을 고유하게 식별하기 위해 key props 사용
    2) 리액트가 효율적으로 변경 사항을 추적하고 업데이트하는데 도움을 줌
    3) key
      ① 리액트에서 key는 컴포넌트 배열을 rendering 했을 때 어떤 요소에 변경이 있는지 알아내기 위해 사용하는 식별자 역할을 수행합니다.
      ② key가 존재하는 경우 빠르게 어떤 요소에 변화가 일어났는지 감지할 수 있습니다.
      ③ key를 이용해 해당 요소를 추출할 수 있습니다.
      ④ key로 사용하기 적절한 값은 DB에서 조회한 데이터의 PK값입니다.

  
  * props drilling
    1) 여러 단계의 중간 컴포넌트를 거쳐 props를 전달하는 현상
       → 이로 인해 컴포넌트 구조가 복잡해질 수 있습
    2) 이를 해결하기 위해 Context API, Redux, Recoil 등의 상태 관리 도구를 사용하기도 함


  * prop-types
    1) props 객체에 저장된 속성들의 타입 등을 명시함으로써 다른 개발자와 협업 시 개발 능률을 높일 수 있음
    2) 단, 별도 CDN 추가가 필요함 (참고 : https://github.com/facebook/prop-types)
*/
