import React, { useState } from 'react'

function Example2() {

  const [isChecked, setIsChecked] = useState(false);
  const changeHandler = (e) =>{
    setIsChecked(e.target.checked);
  };

  return (
    <>
      <h3>체크박스와 state</h3>
      <input type="checkbox" id="chk" checked={isChecked} onChange={changeHandler}/>
      <label htmlFor="chk">체크박스</label>
      {/* boolean값은 표현식으로 화면에 표시할 수 없음 => 문자열로 출력되도록 */}
      <h5>체크상태: <span>{isChecked ? 'true' : 'false'}</span></h5>
    </>
  )
}

export default Example2