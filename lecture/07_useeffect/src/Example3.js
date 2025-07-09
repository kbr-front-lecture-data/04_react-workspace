import React, { useEffect, useState } from 'react'

function Example3() {
  const [date, setDate] = useState({
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    day: new Date().getDate(),
  });

  useEffect(() => {
    console.log('useEffect 동작');
  }, [date.year, date.month]);//----- 의존 배열에 명시한 date.year, date.month 값이 변하면 useEffect에 등록한 함수가 동작


  const changeHandler = (e) => {
    setDate({
      ...date,
      [e.target.id]: Number(e.target.value)
    });
  };

  return (
    <>
      <input type="text" placeholder="년" id="year" value={date.year} onChange={changeHandler} />
      <input type="text" placeholder="월" id="month" value={date.month} onChange={changeHandler} />
      <input type="text" placeholder="일" id="day" value={date.day} onChange={changeHandler} />
      <h1>{JSON.stringify(date)}</h1>
    </>
  )
}

export default Example3