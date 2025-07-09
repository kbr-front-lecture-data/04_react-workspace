import React, { useEffect, useState } from 'react'

function Example5() {

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(jsonData => {
        setTodos(jsonData);  // API로부터 가져온 데이터를 렌더링 할 수 있도록 state에 저장합니다.
      })
  }, [])  // 최초 렌더링할 때 가져온 데이터를 출력합니다.

  return (
    <>
      { todos.map(todo => <div key={todo.id}>{todo.title}</div>) }
    </>
  )
}

export default Example5