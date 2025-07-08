import React, { useState } from 'react'

function Example3() {

  const [selectedValue, setSelectedValue] = useState('');
  const changeHandler = (e) => {
    setSelectedValue(e.target.value);
  };

  return (
    <>
      <h3>select와 state</h3>
      <select value={selectedValue} onChange={changeHandler}>
        <option hidden value="">통신사 선택</option>
        <option>skt</option>
        <option>kt</option>
        <option>lgu+</option>
      </select>
      <h5>선택값: <span>{selectedValue}</span></h5>
    </>
  )
}

export default Example3