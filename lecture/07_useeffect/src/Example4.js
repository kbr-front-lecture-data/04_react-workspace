import React, { useEffect, useState } from 'react'

function Example4() {


  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => { // setup 함수 => isRunning 상태 변경시 실행
    console.log('isRunning상태 변경시마다 실행', isRunning);
    let interval = null;

    if(isRunning){
      interval = setInterval(() => {
        setSeconds(prev => prev + 1); // 왜 seconds + 1 은 안되지?
      }, 1000);
      console.log('interval 걸림', interval)
    }

    // cleanup 함수 => Unmount 시 실행 
    return () => { 
      console.log('cleanup 함수 실행', interval);
      clearInterval(interval);
    }
  }, [isRunning]);

  return (
    <>
      <h1>타이머</h1>
      <h2>{seconds}</h2>
      <button onClick={() => setIsRunning(true)}>시작</button>
      <button onClick={() => setIsRunning(false)}>정지</button>
      <button onClick={() => {
        setIsRunning(false);
        setSeconds(0);
      }}>리셋</button>
      <p>상태: {isRunning ? '실행중' : '정지'}</p>
    </>
  )
}

export default Example4