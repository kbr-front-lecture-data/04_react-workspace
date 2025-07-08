import React from 'react'

function Practice() {
  return (
    <>
      <div>Practice</div> 

      {/* 
        3) 아래의 컴포넌트를 조합하여 회원가입 폼을 작성하시오. 
           - 아이디 입력란
           - 중복확인 버튼 (클릭시 그냥 "중복확인버튼 클릭됨" 출력)
           - 비밀번호 입력란
           - 이름 입력란
           - 초기화 버튼 (클릭시 폼 초기화 되도록)
           - 회원가입 버튼 (클릭시 아이디 또는 비밀번호가 누락됐을 경우 "필수 입력값 누락" 출력 후 서브밋 방지)
      */}
      <form>
        아이디: <InputField type={"text"} id={"userId"} /> 
        <Button type={"button"} onClick={() => alert("중복확인버튼 클릭됨")} text={"중복확인"} />
        <br />
        비밀번호: <InputField type={"password"} id={"userPwd"} /> 
        <br />
        이름: <InputField type={"text"} id={"userName"} />
        <br /><br />

        <Button type={"reset"} text={"초기화"} />
        <Button type={"submit"} text={"회원가입"} onClick={(e) => {
          if(!document.getElementById("userId").value || !document.getElementById("userPwd").value) {
            alert("아이디 또는 비밀번호는 필수 입력사항입니다.");
            e.preventDefault();
          }
        }} />
      </form>
      

    </>
  )
}

// 1) 입력 상자 컴포넌트를 정의하시오 (type과 id속성은 props로 전달되는 값을 활용)
function InputField({type, id}){
  return <input type={type} id={id} />
}

// 2) 버튼 컴포넌트를 정의하시오 (type과 클릭시실행될 이벤트핸들러, 버튼문구는 props로 전달되는 값을 활용)
function Button({type, onClick, text}) {
  return <button type={type} onClick={onClick}>{text}</button>
}


export default Practice