import React, { useEffect, useState } from 'react'

function Example1() {
  const [now, setNow] = useState(new Date().toLocaleTimeString());
  useEffect(() => {
    alert('Example1 컴포넌트가 Mount 또는 Update 됨');
  }); // ---- 의존 배열이 없으면 렌더링시마다 useEffect에 등록한 함수가 동작 
      // ---- 처음 컴포넌트가 렌더링 될때(Mount), 버튼 클릭할 때마다(Update)
  
  const clickHandler = (e) => {
    setNow(new Date().toLocaleTimeString());
  };
  return (
    <>
      <button onClick={clickHandler}>Now</button>
      <h1>{now}</h1>
    </>
  )
}

export default Example1