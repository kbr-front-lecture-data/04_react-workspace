# B-1_React.js
## 2. JSX
<br>

### 1-2-1. JSX 사용법
- 기본 사용 방법은 이렇다
    
    ```jsx
    const element = <h1>Hello, world!</h1>;
    ```
    
- 최상위 엘리먼트가 두 개 이상일 경우에는 에러가 발생한다
- 태그 여러 개를 포함할 경우 빈 태그`<>`를 사용한다
    
    ```jsx
    const component = (
      <>
        <h1>Hello</h1>
        <p>world!</p>
      </>
    );
    ```
    <br>
    
- 중괄호를 사용해 JSX 안에 JavaScript 표현식도 삽입할 수 있다
    - 주석도 중괄호를 사용해야 작성이 가능하다
    
    ```jsx
    const name = 'React';
    const element = <h1>Welcome to {name}!</h1>;
    ```
    <br>
    
- 속성(attribute)도 정의할 수 있다
    - 기존 `class` 속성은 `className`이라는 속성명으로 사용해야 한다
    
    ```jsx
    const id = "kinds1";
    const className = "animal";
    
    const element = <h1 id={id} className={className} onClick={test}>cat</h1>;
    ```
    <br>
    
- css도 inline 스타일로 적용할 수 있다 단, camelCase로 작성해야 한다
    - 단위를 사용할 경우, 문자열로 사용해야 하며 사용하지 않을 경우 숫자만 작성해도 적용이 된다
    
    ```jsx
    const style = {
        backgroundColor: 'red',
        color: 'white',
        marginTop: 30,
        padding: '20px'
    }
    
    const element = (
        <>
            <h1 style={style}>Worst Fruit</h1>
            <h3>Kiwi</h3>
        </>
    );
    ```
    <br>
    
- JavaScript의 조건문을 JSX에서 사용할 수 있다
    
    ```jsx
    const isLoggedIn = true;
    
    const element = (
      <div>
        {isLoggedIn ? <h1>Hi</h1> : <h1>Please log in</h1>}
      </div>
    );
    ```
    <br>
    
- 이벤트 관련 속성도 중괄호를 활용해 작성할 수 있다
    - 이벤트 관련 속성은 camelCase로 작성해야 한다
    
    ```jsx
    const element = (
        <>
            <button onClick={() => alert('클릭')}>클릭하지마시오</button>
        </>
    )
    ```