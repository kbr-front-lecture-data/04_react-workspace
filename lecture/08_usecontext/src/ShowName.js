import React, { useContext } from 'react'
import { NameContext } from './App';

/* 2) props로 전달받기 
function ShowName({currentName}) {
  return (
    <h2>안녕하세요, {currentName}님!</h2>
  )
}
*/

// 3) useContext 적용
function ShowName() {
  const {currentName} = useContext(NameContext);

  return (
    <h2>안녕하세요, {currentName}님!</h2>
  )
}

export default ShowName