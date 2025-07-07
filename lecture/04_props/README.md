# B-1_React.js
## 4. Props
<br>

### 1-4-1. props 개요
- props는 컴포넌트 간의 데이터를 전달할 때 사용한다
- 태그만을 이용해 엘리먼트를 나눴다면, 사용자 정의 컴포넌트로도 나타낼 수 있다
    
    ```jsx
    export default function Login() {
    	return (
    		<Welcome
    			person = {{name: '홍길동'}},
    			size = {100}
    	);
    }
    ```
    
    - 부모 컴포넌트에서 person 객체와 size 객체를 전송하면
    
    ```jsx
    function Welcome({person, size}) {
    
    }
    ```
    
    - 자식 컴포넌트에서 `person`과 `size`를 사용할 수 있다
    <br><br>

- 또한 함수 매개변수에서 기본 값도 설정할 수 있다
    
    ```jsx
    function Greeting({name = '게스트'}) {
      return <h1>안녕하세요, {name}님!</h1>;
    }
    
    export default Greeting;
    ```
<br><br>
<hr>
<br><br>

### 1-4-2. children-props
- `props.children`으로 컴포넌트 태그 사이에 있는 값을 컴포넌트 내부에서 활용할 수 있다
    
    ```jsx
    function Greeting(props) {
      return <h1>안녕하세요, {props.name}님!</h1>;
    }
    ```