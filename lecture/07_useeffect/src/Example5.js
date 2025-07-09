import React, { useEffect } from 'react'

function Example5() {

  useEffect(() => {
    window.addEventListener('keydown', keydownHandler);

    return () => window.removeEventListener('keydown', keydownHandler);
  }, []);

  const keydownHandler = (e) => {
    console.log('눌린 키:', e.key)
  };

  return (
    <div>콘솔창을 킨 상태에서 아무 키나 눌러보세요</div>
  )
}

export default Example5