import React, { useState } from 'react'

function Example4() {

  const [id, setId] = useState('');
  const [pwd, setPwd] = useState('');
  
  const submitHandler = (e) => {
    if(id.trim() === '' || pwd.trim() === ''){
      alert('아이디와 비밀번호 입력을 확인하세요');
      e.preventDefault(); // submit 막기
      return; // 이벤트 핸들러 실행 막기 
    }

    alert(`로그인 제출! \nid: ${id}, pwd: ${pwd}`);
  };

  return (
    <>
      <h3>로그인 폼과 state 활용 (state 2개 사용)</h3>
      <form action="/login" method="post" onSubmit={submitHandler}>
        <input type="text" placeholder="아이디 입력" value={id} onChange={(e) => setId(e.target.value)} />
        <br />
        <input type="password" placeholder="비밀번호 입력" value={pwd} onChange={(e) => setPwd(e.target.value)} />
        <br />
        <button type="submit">로그인</button>
      </form>
    </>
  )
}

export default Example4