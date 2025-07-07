import React from 'react'

function StudentList() {
  const students = [
    {id: 1, name: '김철수', age: 20},
    {id: 2, name: '이영희', age: 22},
    {id: 3, name: '박민수', age: 21},
  ];

  return (
    <div>
      <h2>학생 목록</h2>
      {students.map((student, index) => 
        <p>
          이름: {student.name} <br/>
          나이: {student.age}세
        </p>
      )}
    </div>
  )
}

export default StudentList