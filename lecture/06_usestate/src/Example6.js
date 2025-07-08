import React, { useState } from 'react'

function Example6() {

  const [inputValue, setInputValue] = useState('');
  const [animals, setAnimals] = useState([]);

  const clickHandler = (e) => {
    if(inputValue.trim() === ''){
      alert('동물 이름을 입력하세요.');
      return;
    }
    setAnimals([
      ...animals,   // ---기존 animals 배열 요소 전부 (스프레드 연산자 활용)
      inputValue,   // --- 새로 입력한 동물 추가 
    ]);
    
    // 입력상자 초기화
    setInputValue('');
  }

  return (
    <>
      <h3>배열 활용 - 동물들</h3>
      <input type="text" placeholder="동물 입력" 
             value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      <button type="button" onClick={clickHandler}>추가</button>
      <ul>
        {animals.map((animal, index) => (
          <li key={index}>{animal}</li>
        ))}
      </ul>
    </>
  )
}

export default Example6