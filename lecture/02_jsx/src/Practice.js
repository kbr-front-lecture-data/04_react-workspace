import React from 'react'

// rfce

function Practice() {

  const name = "Tom";
  const car = {
    model: "sorento",
    price: 4000,
  };
  const score = 80;
  let value;
  const color = "r";
  
  return (
    <>
      <h2>Practice</h2>
      {/* 1) name 변수에 저장된 값을 div 태그로 표현하시오 */}
      <div>{name}</div>
      {/* 2) car객체의 model속성만 div 태그로 표현하시오 */}
      <div>{car.model}</div>
      {/* 3) score값이 60이상일 경우 "합격", 아니면 "불합격"을 div 태그로 표현하시오 */}
      <div>{score >= 60 ? "합격" : "불합격"}</div>
      {/* 4) value 변수에 저장된 값이 없으면 "값없음", 값이 있으면 저장된 값을 div 태그로 표현하시오 */}
      <div>{value || "값없음"}</div>
      {/* 5) color 값이 "r"이면 "red", "g"면 "green", "b"면 "blue"배경색을 div 태그에 적용하시오 (100x100크기) */}
      <div style={{
        width: "100px",
        height: "100px",
        backgroundColor: color=="r" ? "red" : color=="g" ? "green" : color=="b" ? "blue" : "white"
      }}></div>
    </>

  )
}

export default Practice