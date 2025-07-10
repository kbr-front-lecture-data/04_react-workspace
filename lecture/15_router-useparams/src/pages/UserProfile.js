import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import { Link, useParams } from 'react-router-dom';

import '../styles/common.css';

function UserProfile() {
  const users = useContext(UserContext);
  const {userId} = useParams();

  const foundUser = users.find((user) => user.no === Number(userId));

  return (
    <div>
      <h2>{foundUser ? '사용자 프로필' : '사용자를 찾을 수 없습니다.'}</h2>
      {
        foundUser && (
          <div className="detail">
            <p><strong>ID:</strong> {foundUser.no}</p>
            <p><strong>이름:</strong> {foundUser.name}</p>
            <p><strong>나이:</strong> {foundUser.age}세</p>
            <p><strong>직업:</strong> {foundUser.job}</p>
          </div>
        )
      }
      
      <div style={{marginTop: '10px', textAlign: 'right'}}>
        <Link className="link" to="/users">🔙 사용자 목록으로 돌아가기</Link>
      </div>
    </div>
  )
}

export default UserProfile