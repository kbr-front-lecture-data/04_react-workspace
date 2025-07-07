import React from 'react'

// 1) 기본 흐름 
/*
function NameCard(props) { // props == {name:"xxx", phone:"xxxx"}
  return (
    <>
      <h1>
        <div>이름: {props.name}</div>
        <div>연락처: {props.phone}</div>
      </h1>
    </>
  )
}
*/

// 2) 객체 구조 분해 할당 
// 2_1) props로 먼저 받고 하기 
/*
function NameCard(props) { // props == {name:"xxx", phone:"xxxx"}
  const {name, phone} = props;
  
  return (
    <>
      <h1>
        <div>이름: {name}</div>
        <div>연락처: {phone}</div>
      </h1>
    </>
  )
}
*/
// 2_2) 전달되는 값을 바로 하기 
/*
function NameCard({name, phone}) { 
  return (
    <>
      <h1>
        <div>이름: {name}</div>
        <div>연락처: {phone}</div>
      </h1>
    </>
  )
}
*/

// 3) 기본값 설정하기 
function NameCard({name="Jessica", phone="010-9999-9999"}) { 
  return (
    <>
      <h1>
        <div>이름: {name}</div>
        <div>연락처: {phone}</div>
      </h1>
    </>
  )
}

export default NameCard