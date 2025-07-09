import React, { useEffect, useState } from 'react'

function Example2() {
  const [now, setNow] = useState(new Date().toLocaleTimeString());
    useEffect(() => {
      alert('Example2 컴포넌트가 Mount 됨');
    }, []); // ---- 의존 배열이 빈 배열이면 최초 렌더링시에만 useEffect에 등록함 함수가 실행됨 
            // ---- 처음 컴포넌트가 렌더링 될때(Mount)
    
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

export default Example2