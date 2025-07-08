import React, { useState } from 'react'

function Example5() {

  // state (id와 pwd를 가지는 user객체)
  const [user, setUser] = useState({
    id: '',
    pwd: ''
  });

  const submitHandler = (e) => {
    if(user.id.trim() === '' || user.pwd.trim() === ''){
      alert('아이디와 비밀번호 입력을 확인하세요');
      e.preventDefault(); // submit 막기
      return; // 이벤트 핸들러 실행 막기 
    }

    alert(`로그인 제출! \nid: ${user.id}, pwd: ${user.pwd}`);
  };

  // 입력 상자(아이디, 비번)의 입력값 변경시마다(onChange) 실행시킬 이벤트 핸들러 
  const changeHandler = (e) => {
    setUser({
      ...user, // ------------------------- 기존 user 객체가 가진 값을 분해하고
      [e.target.id]: e.target.value // ---- 현재 이벤트가 발생한 입력상자의 입력값을 덮어씌우기 
                                    // ---- 대괄호[]는 프로퍼티를 변수나 표현식의 값으로 동적으로 지정하는 경우 반드시 필요한 ES6문법
    })
  };

  return (
    <>
      {/*
        <h3>로그인 폼과 state 활용 (state 1개만 사용)</h3>
        <form action="/login" method="post" onSubmit={submitHandler}>
          <input type="text" placeholder="아이디 입력" name="id" value={user.id} onChange={(e) => setUser({...user, id: e.target.value})} />
          <br />
          <input type="password" placeholder="비밀번호 입력" name="pwd" value={user.pwd} onChange={(e) => setUser({...user, pwd: e.target.value})} />
          <br />
          <button type="submit">로그인</button>
        </form>
      */}
      
      <h3>로그인 폼과 state 활용 (state 1개만 사용)</h3>
      <form action="/login" method="post" onSubmit={submitHandler}>
        <input type="text" placeholder="아이디 입력" id="id" value={user.id} onChange={changeHandler} />
        <br />
        <input type="password" placeholder="비밀번호 입력" id="pwd" value={user.pwd} onChange={changeHandler} />
        <br />
        <button type="submit">로그인</button>
      </form>
    </>
  )
}

export default Example5