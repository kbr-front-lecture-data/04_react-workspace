# B-1_React.js
## 3. 컴포넌트
<br>

### 1-3-1. 컴포넌트(Component)
- React로 만들어진 앱을 이루는 최소한의 단위이다
- UI를 재사용 가능한 개별적인 조각으로 나누고 조각을 개별적으로 나누어 코딩한다
    - 예를 들어 자동차를 만든다고 생각하면
    <img src="../../image/React 컴포넌트 (1).png">
    
    - 엔진, 바퀴, 문 등은 각각 독립적인 컴포넌트이다
    - 이 컴포넌트들을 조합해 하나의 완전한 자동차(어플리케이션)을 만든다
    - 각 부품은 다른 자동차에도 재사용이 가능하다
    <br><br>
    
- 보이는 화면을 독립적으로 구성해 재사용을 할 수 있고 새로운 컴포넌트를 쉽게 만들 수 있다
    - 재사용이 가능하도록 작은 크기로 유지해야 하며, 순수 함수처럼 작성 되어야 한다
- 컴포넌트 이름은 항상 대문자로 시작하도록 한다
<br><br>
    
- 컴포넌트의 특징
    1. **독립성 (Independence)**
        - 각 컴포넌트는 자신만의 상태와 로직을 가진다
        - 다른 컴포넌트에 의존 하지 않는다
    2. **재사용성 (Reusability)**
        - 한 번 만든 컴포넌트는 여러 곳에서 반복적으로 사용할 수 있다
    3. **조합성 (Composability)**
        - 여러 컴포넌트를 조합해 더 복잡한 컴포넌트를 만들 수 있다
    4. **캡슐화 (Encapsulation)**
        - 컴포넌트 내부의 구현 세부 사항은 외부에 노출되지 않는다
    <br><br>

- 클래스형 컴포넌트
    - 임의의 메서드를 정의할 수 있다
    
    ```jsx
    class HelloWorld extends React.Component {
        render() {
            return React.createElement(
                'h1',
                'Hello World'
            );
        }
    }
    ```
    <br>

- 함수형 컴포넌트
    - 16.8 버전 이후로 함수형이 더 많이 사용된다
    - 선언하기 편리하며 메모리 자원을 덜 사용한다
    - 결과물의 크기도 클래스형 컴포넌트보다 작다
    
    ```jsx
    function HelloWorld() {
        return React.createElement('h1', 'Hello World');
    }
    ```
<br><br>
<hr>
<br><br>

### 1-3-2. Component 분류
- 기능별 분류
    1. 표현 컴포넌트 (Presentational Components)
        - UI 표현에만 집중하는 컴포넌트이다
        - 상태를 거의 가지지 않고 순수 함수적인 성격을 가지고 있어 재사용성이 높다
        
    2. 컨테이너 컴포넌트 (Container Components)
        - 데이터 관리와 비즈니스 로직을 담당하는 컴포넌트이다
        - 상태 관리와 데이터 처리를 하고 표현 컴포넌트에 데이터를 전달하는 비즈니스 로직을 포함한다
<br><br>

- 복잡도별 분류
    1. 원자 컴포넌트 (Atomic Components)
        - 가장 작은 단위의 컴포넌트이다
        - 더 이상 분해할 수 없는 기본 요소들이다
    2. 분자 컴포넌트 (Molecular Components)
        - 여러 원자 컴포넌트를 조합해서 만든 컴포넌트이다
    3. 유기체 컴포넌트 (Organism Components)
        - 분자 컴포넌트들을 조합해서 만든 복잡한 컴포넌트이다
<br><br><br>
<hr>
<br><br>

### 1-3-3. Component 설계 원칙
- 단일 책임 원칙 (Single Responsibility Principle, SRP)
    - 하나의 컴포넌트는 한 가지 일을 하는 게 이상적이라는 원칙이다
        - 컴포넌트가 다수의 책임을 가지면 의존성이 강해져서 확장성이 떨어진다
    - 컴포넌트는 오직 하나의 이유로만 변경되어야 한다
    - 컴포넌트의 응집도가 높아지고 유지보수 및 재사용이 용이해진다
<br><br><br>
<hr>
<br><br>

### 1-3-4. React 커스텀
- React 파일을 생성하고 필요 없는 파일을 삭제한다
    
    <img src="../../image/리액트 커스텀 1.png">
    
    - 파일을 삭제하면 `App.js`와 `index.js`가 남는데 삭제한 파일의 import문과 참조문을 모두 삭제한다
    - `index.js`
        
        ```jsx
        import React from 'react';
        import ReactDOM from 'react-dom/client';
        import App from './App';
        
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(
          <React.StrictMode>
            <App />
          </React.StrictMode>
        );
        ```
        
    - `App.js`
        
        ```jsx
        function App() {
          return (
            
          );
        }
        
        export default App;
        ```
        
- `App.js`의 return문에 h1 태그로 hello를 작성해보자
    
    ```jsx
    function App() {
      return (
        <h1>
          hello
        </h1>
      );
    }
    
    export default App;
    ```
    
    <img src="../../image/리액트 커스텀 결과.png">
<br><br>
<hr>
<br><br>

### 1-3-5. 렌더링(Rendering)
- 정리된 `index.js`를 살펴보자
    
    ```jsx
    import React from 'react';
    import ReactDOM from 'react-dom/client';
    import App from './App';
    
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    ```
    
    - `ReactDOM.createRoot(document.getElementById('root'));`
        - 엘리먼트들이 렌더링 될 하나의 DOM을 Root DOM Node라고 한다
        - React Element를 루트 DOM에 렌더링 하기 위해 `ReactDOM.createRoot(document.getElementById('root'))`로 루트 DOM 노드를 가져오고
            
            `.render()`로 렌더링 할 엘리먼트를 전달하는 구조이다 
<br><br>

- 렌더링 시점에 조건을 사용해 조건에 따라 다른 엘리먼트가 렌더링 될 수 있도록 작성할 수도 있다
    
    ```jsx
    const element = (answer === '배부름') ? (
        <h1>소화제가 어딨더라~?</h1>
    ): (
        <h1>뭐 시켜 먹지~?</h1>
    );
    ```