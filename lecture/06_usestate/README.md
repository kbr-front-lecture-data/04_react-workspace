# B-1_React.js
## 6. state
<br>

### 1-6-1. state 개념
- `state`는 React에서 동적인 데이터를 관리하기 위해 사용하는 객체이다
- `const`, `let`과 다르게 값이 변하면 관련 있는 컴포넌트들이 재렌더링 된다
- 보통 `useState()`라는 리액트 함수를 사용해 사용한다

```jsx
import { useState } from "react";

const [state, setState] = useState(초기default값);
```

- `useState`를 여러 번 호출해 각 상태를 개별적으로 관리할 수 있다
- 주의 사항
    - 컴포넌트 내부에서만 초기 값 설정과 수정이 가능하다
    - 비동기로 작동하기 때문에 상태 변경 직후의 값에 의존하지 말아야 한다
<br><br><br>
<hr>
<br><br>

### 1-6-2. 객체, 배열에서의 state
- 원시 타입과 동일하게 state를 수정하면 안 된다
- 수정해도 state는 새로운 메모리 주소를 참조하는 게 아니라 기존의 메모리 주소를 그대로 참조하기 때문에 의도대로 작동하지 않는다

```jsx
setItems([...items, newItem]);
```