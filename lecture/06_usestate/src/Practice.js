import React, { useState } from 'react'

function Practice() {

  const [student, setStudent] = useState({
    name: '',
    age: '',
    grade: '1학년',
  });
  const [students, setStudents] = useState([]);

  const input = (e) => {
    setStudent({
      ...student,
      [e.target.id]: e.target.value
    });
    console.log(student);
  };
  const registStudent = (e) => {
    setStudents([
      ...students,
      student
    ]);
    setStudent({
      name: '', 
      age: '',
      grade: '1학년',
    });
  };
  const removeStudent = (e) => {
    const newStudents = [...students];
    newStudents.splice(e.target.dataset.removeIdx, 1);
    setStudents(newStudents);
  };

  return (
    <>
      <h1>학생 정보 관리</h1>
      이름: <input type="text" id="name" placeholder="이름" value={student.name} onChange={input} />
      <br />
      나이: <input type="text" id="age" placeholder="나이" value={student.age} onChange={input} />
      <br />
      학년: 
      <select id="grade" value={student.grade} onChange={input}>
        <option>1학년</option>  
        <option>2학년</option>
        <option>3학년</option>
      </select> 

      <button type="button" onClick={registStudent}>학생 추가</button>

      <h2>등록된 학생 (총 <span>{students.length}</span>명)</h2>
      <ul>
        {students.map((student, idx) => (
          <li key={idx}>
            {idx + 1}. {student.name} ({student.age}살, {student.grade})
            <button type="button" onClick={removeStudent} remove-idx={idx}>삭제</button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Practice