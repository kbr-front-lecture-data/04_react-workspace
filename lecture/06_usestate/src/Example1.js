import React, { useState } from 'react'

function Example1() {

  const [inputValue, setInputValue] = useState('');

  const changeHandler = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <h3>입력 상자와 state</h3>
      <input type="text" placeholder="값을 입력하세요" value={inputValue} onChange={changeHandler} />
      <h5>입력값: <span>{inputValue}</span></h5>
    </>
  )
}

export default Example1