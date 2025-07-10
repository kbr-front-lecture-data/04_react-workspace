import React, { useContext } from 'react'
import { NameContext } from './App'

/* 2) props로 전달받기
function ChangeName({names, currentName, setCurrentName}) {
  return (
    <div>
      <div>현재 이름: {currentName}</div>
      {names.map((name, index) => (
        <button onClick={(e) => setCurrentName(name)}>{name}로 변경</button>
      ))}
    </div>
  )
}
*/

// 3) useContext 적용 
function ChangeName() {
  const {currentName, setCurrentName, names} = useContext(NameContext);
  return (
    <div>
      <div>현재 이름: {currentName}</div>
      {names.map((name, index) => (
        <button onClick={(e) => setCurrentName(name)}>{name}로 변경</button>
      ))}
    </div>
  )
}

export default ChangeName