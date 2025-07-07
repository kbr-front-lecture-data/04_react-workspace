import { Fragment } from "react/jsx-runtime";

 function App() {
  const radius = 3.5; // (3)
  const boxStyle = { // (7)
    width: '100px',
    height: '100px',
    border: '1px solid black',
    backgroundColor: 'red',
    textAlign: 'center',
    fontSize: '32px',
    lineHeight: '100px',
    color: 'white'
  };
  const book = { // (8)
    title: '어린왕자',
    author: '생택쥐베리'
  };

  return (
    // 1) HTML과 유사한 구조 ---------------------------------------
    /*
    <div>Hello World</div>
    */

    // 2) 단일 루트 요소 -------------------------------------------
    // 2-1) 임의의 div 요소로 묶기 : 단, 스타일 적용시 잘 고려해야됨
    /*
    <div>
      <div>Hello World</div>
      <div>Nice to meet you!</div>
    </div>
    */
    // 2-2) React.Fragment로 묶기 : 가상의 요소 (렌더링시 보여지지않음)
    /*
    <Fragment>
      <div>Hello World</div>
      <div>Nice to meet you!</div>
    </Fragment>
    */
    // 2-3) <>로 묶기 : React.Fragment의 축약 버전 
    /*
    <>
      <div>Hello World</div>
      <div>Nice to meet you!</div>
    </>
    */

    // 3) 자바스크립트 표현식 삽입
    /*
    <>
      <h3>반지름: {radius}</h3>
      <h4>원둘레: {2 * Math.PI * radius}</h4>
      <h4>원넓이: {Math.PI * Math.pow(radius, 2)}</h4>
    </>
    */

    // 4) 속성 작성 
    /*
    <>
      <h3 
        id="radius" 
        className="radius" 
        onClick={() => alert('안녕!')}>반지름: {radius}</h3>
      <h4>원둘레: {2 * Math.PI * radius}</h4>
      <h4>원넓이: {Math.PI * Math.pow(radius, 2)}</h4>
    </>
    */

    // 5) 닫는 태그 필수 
    /*
    <>
      <input type="text" />
      <br/>
    </>
    */

    // 6) 조건부 렌더링 
    /*
    <>
      {radius === 3.5 ? <span>정답!</span> : <span>땡!</span>}
      <br/>
      {radius === 3.5 && <span>딩동댕~</span>}
      <br />
    </>
    */

    // 7) 스타일 적용 
    /*
    <>
      <div style={boxStyle}>Hello</div>
      <span style={{fontSize: '20px', color: 'pink'}}>React</span>
    </>
    */

    // 8) 객체 직접 출력 불가
    <ul
      id="book" // JSX 내에서 태그 내부의 주석
      className="book" 
    >
      <li>{JSON.stringify(book)}</li> {/* JSX 내에서 태그 외부의 주석 */}
      <li>{book.title}</li>
      <li>{book.author}</li>
    </ul>
  );
}

export default App;

/*
  ## JSX ## 
  1. JavaScript XML
  2. React에서 UI를 정의하기 위해 사용하는 자바스크립트의 확장 문법
  3. HTML과 매우 유사한 구조를 자바스크립트 코드 안에서 직접 사용할 수 있게 해주며
     가독성과 직관성을 높여줌
  4. JSX 문법
    1) HTML과 유사한 구조
      ① JSX는 HTML과 거의 비슷한 문법을 사용하지만, 자바스크립트 코드 안에서 작성됩니다. 
      ② 예시
        const element = <h1>Hello, World!</h1>;
    2) 단일 루트 요소 필요
      ① JSX에서 여러 태그를 반환할 때 반드시 하나의 부모(루트) 요소로 감싸야 합니다. 
      ② 최상위 Node로 사용할 태그가 없는 경우에는 React가 지원하는 Fragment를 사용할 수 있습니다. (<React.Fragment></React.Fragment> 또는 <></>)
      ③ 예시
        return (
          <div>
            <h1>Hello, World!</h1>
            <p>Nice to meet you!</p>
          </div>
        );
    3) 자바스크립트 표현식 삽입
      ① JSX 내부에서 중괄호 {}를 사용해 자바스크립트 변수, 연산, 함수 호출, 주석 등을 삽입할 수 있습니다.
      ② 예시
        const numA = 1, numB = 2;
        <h1>{numA} + {numB} = {numA + numB}</h1>    
    4) 속성 작성
      ① JSX의 속성은 HTML과 비슷하지만, 자바스크립트 예약어와 충돌하지 않도록 일부 속성은 변경된 이름을 사용합니다.
      ② 예시
        - class   -> className
        - for     -> htmlFor
        - onclick -> onClick (이벤트 속성: 기본 소문자 조합에서 camelCase 방식으로 변경)
    5) 닫는 태그 필수
      ① 모든 태그는 반드시 닫아야 합니다. 셀프 클로징 태그도 /를 붙여 닫아야 합니다.
      ② 예시
        - <br />, <img />, <input /> 등
    6) 조건부 렌더링
      ① 삼항 연산자, 논리 연산자(&&) 등을 사용해 조건에 따라 다른 내용을 렌더링할 수 있습니다.
      ② 예시
        { isLoggedIn ? <LogoutButton /> : <LoginButton /> }
    7) 스타일 적용
      ① 인라인 스타일은 객체 형태로 style 속성에 전달합니다.
      ② 기존 dash-case(kebab-case) 형식의 CSS 속성명을 camelCase 방식으로 변경합니다.
      ③ 예시
        <div style={{ color: 'red', backgroundColor: 'yellow' }}>Hello</div>
    8) 객체 직접 출력 불가
      ① JSX에서는 객체 자체를 직접 렌더링할 수 없어 문자열로 변환해야 합니다.
      ② 객체의 속성에 접근하는 것은 가능합니다.
      ③ 예시
        - 객체를 문자열로 변환
          { JSON.stringify(obj) }
        - 객체의 속성에 접근
          { obj.a }
*/