# B-1_React.js
## 7. Hooks - useEffect
<br>

### 1-7-1. Hooks란
- 리액트 16.8 버전에서 추가된 기능이며 기존의 함수형 컴포넌트에서 할 수 없던 작업을 할 수 있게 해준다
- Hooks가 생기기 전에는 함수형 컴포넌트를 클래스 컴포넌트로 변환 해야만 상태 메서드를 사용할 수 있었다
- 이제 함수형 컴포넌트 안에서 이런 기능을 사용할 수 있는 방법을 만들어 코드를 작성할 수 있게 한다
<br><br><br>
<hr>
<br><br>

### 1-7-2. useEffect

- 리액트 컴포넌트가 렌더링 될 때마다 특정 작업을 수행하도록 설정할 수 있는 Hook이다
- mount(브라우저에 뜰 때)나 update(갱신될 때) 이후 시점에 동작 되어야 할 내용을 `useEffect`를 사용해 작성한다
- 단순히 익명 함수로 작성 했을 경우 mount나 update 이후 동작 된다
    
    ```jsx
    useEffect(() => {
      console.log('렌더링될 때마다 실행');
    });
    ```
    <br>
    
- 빈 배열을 추가했을 경우, mount 시점에만 동작한다
    
    ```jsx
    useEffect(() => {
      console.log('처음 생성될 때만 실행');
    }, []);
    ```
    <br>
    
- 배열을 추가하고 값을 넣었을 경우 해당 값이 변화 해야만 `useEffect`가 동작한다
    
    ```jsx
    useEffect(() => {
      console.log('isRunning이 변경됨');
    }, [isRunning]);
    ```
    <br>
    
- 새로운 useEffect 함수가 발생하기 전에 리소스를 제거해야 하는 작업도 할 수 있다
    - 이런 함수를 정리 함수라고 한다
    
    ```jsx
    useEffect(() => {
      const interval = setInterval(() => {}, 1000);
      
      return () => {
        clearInterval(interval);
      };
    }, []);
    ```
    <br>
    
    - 마운트 후 업데이트를 했을 때 동작 과정
        
        <img src="../../image/React 마운트와 업데이트.png">

## 미션
[Hooks - useEffect](https://www.notion.so/06-Hooks-useEffect-21b1eb8b52ff806889d2dd26ef1086c6?source=copy_link)