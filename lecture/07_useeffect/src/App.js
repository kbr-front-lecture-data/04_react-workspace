import Example1 from "./Example1";
import Example2 from "./Example2";
import Example3 from "./Example3";
import Example4 from "./Example4";
import Example5 from "./Example5";

function App() {

  // Stricted 모드 해제하기 

  return (
    <div>
      {/* 1) dependencies가 없을 경우 => mount, update */}
      {/* <Example1 /> */}

      {/* 2) dependencies가 빈배열일 경우 => mount */}
      {/* <Example2 /> */}

      {/* 3) dependencies 배열에 특정값이 있을 경우 => 해당 값이 변경될때마다 */}
      {/* <Example3 /> */}

      {/* 4) 스케쥴링함수 없애기 cleanup */}
      {/* <Example4 /> */}

      {/* 5) API 호출 */}
      <Example5 />

    </div>
  );
}

export default App;

/*
  ## 컴포넌트의 LifeCycle ## 
  1. Mount(마운트)
    1) 컴포넌트가 처음으로 DOM에 삽입되는 단계
    2) 주요 과정 (순서대로 동작)
      ① 초기 상태(state)와 값 설정
      ② JSX(혹은 render 함수) 실행 → 가상 DOM(virtual DOM) 생성
      ③ 가상 DOM을 실제 DOM에 반영
      ④ 브라우저가 화면에 컴포넌트를 그림
      ⑤ 사이드 이펙트(예: 데이터 요청, 타이머 설정 등) 실행
    3) 주요 활용
      ① 초기 데이터 불러오기
      ② 외부 구독(이벤트 리스너 등) 설정
      ③ 타이머, 애니메이션 등 시작
  2. Update(업데이트)
    1) 컴포넌트의 props나 state가 변경되어 다시 렌더링되는 단계
    2) 주요 과정 
      ① 새로운 props/state를 반영해 가상 DOM 재생성
      ② 변경된 부분만 실제 DOM에 반영(재조정, reconciliation)
      ③ 브라우저가 변경된 화면을 다시 그림
      ④ 이전 사이드 이펙트 정리(cleanup) 후, 새로운 사이드 이펙트 실행
    3) 주요 활용
      ① 상태나 props 변화에 따른 작업 수행
      ② 외부 데이터 재요청, 애니메이션 갱신 등  
  3. Unmount(언마운트)
    1) 컴포넌트가 DOM에서 제거되는 단계
    2) 주요 과정 
      ① 컴포넌트가 화면에서 사라지기 전, 모든 사이드 이펙트(타이머, 구독 등) 정리
      ② 메모리 누수 방지 및 리소스 해제
    3) 주요 활용
      ① 이벤트 리스너 제거
      ② 타이머, 네트워크 요청 등 취소
      ③ 외부 구독 해제




  ## React.useEffect() ##
  1. 함수형 컴포넌트에서 사이드 이펙트(side effect)를 처리하기 위한 훅(Hooks)
  2. 사이드 이펙트란 데이터 가져오기(API 호출), 구독 설정, DOM 직접 수정, 타이머 설정 등 
     컴포넌트 외부와 상호작용하거나 비동기 로직을 실행하는 작업을 의미
  3. 작성 구문 
    1) 형식
      React.useEffect(setup[, dependencies]);
    2) 설명
      ① setup
        - 사이드 이펙트가 동작할 코드가 작성된 함수입니다.
        - cleanup 코드를 가지고 있는 함수를 반환할 수 있습니다. (선택)
        - setup 함수에서 return한 cleanup 함수는 컴포넌트가 언마운트될 때 실행됩니다.
      ② dependencies
        - 의존성 배열입니다. 필수가 아닌 선택 인자입니다.
        - setup 함수에서 사용하는 모든 반응형 값(props, state, 변수, 함수 등)이 포함될 수 있습니다.

      * 의존성 배열(dependencies)에 따른 사이드 이펙트 실행 시점
        1) 의존성 배열이 없는 경우
          ▶︎ 컴포넌트가 렌더링될 때마다 실행
        2) 의존성 배열이 빈 배열([])인 경우
          ▶︎ 컴포넌트가 처음 마운트될 때 한 번만 실행
        3) 의존성 배열에 특정 값이 있는 경우 
          ▶︎ 해당 값이 변경될 때마다 실행
  
  4. 예시
    1) API 호출 (최초 1회)
      useEffect(() => {
        fetchData();
      }, []);
    2) 특정 값(data) 변경 시 동작
      useEffect(() => {
        doSomething(data);
      }, [data]);
    3) 이벤트 리스너 등록 및 해제 (cleanup)
      useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
*/
