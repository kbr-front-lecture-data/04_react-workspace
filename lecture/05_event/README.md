# B-1_React.js
## 5. 이벤트 처리
<br>

### 1-5-1. 이벤트 처리 방법
- React 이벤트 이름은 소문자 대신 camelCase를 사용한다
- JSX에 문자열 대신 함수를 전달한다

```jsx
<button onClick={clickBtn}>버튼 클릭!</button>
```

- 주의 사항
    - React의 컴포넌트에는 이벤트 설정이 불가능하다
<br><br><br>
<hr>
<br><br>

### 1-5-2. 이벤트 핸들러
- 이벤트 속성에서 중괄호`{}`를 사용해 이름 없는 익명 함수로 이벤트 핸들러 함수를 작성할 수 있다

```jsx
<button onClick={() => setCount(count + 1)}>
  증가
</button>
```
<br><br><br>
<hr>
<br><br>

### 1-5-3. 자주 사용되는 이벤트 핸들러
- `onChange`
    - `onChange` 이벤트가 발생하면, `e.target.value`를 통해 이벤트 객체에 담긴 input 값을 읽어올 수 있다
    - 사용자가 상호작용 하는 순간마다 입력된 정보 부분이 바로 업데이트 된다
    
    ```jsx
    onChange={(e) => setState(e.target.value)}
    ```
    <br>

- `onClick`
    - 사용자가 클릭했을 때 발생하는 이벤트이다
    
    ```jsx
    onClick={() => setState(새로운값)}
    ```

## 미션
[이벤트 처리](https://www.notion.so/05-21b1eb8b52ff80d8a3f5d118177e725c?source=copy_link)