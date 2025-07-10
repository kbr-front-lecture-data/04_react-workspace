import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import { Link } from 'react-router-dom';

function UserList() {
  const users = useContext(UserContext); // 상위 Provider가 없으므로 UserContext 객체의 defaultValue 객체반환

  return (
    <div>
      <h2>사용자 목록</h2>
      <ul style={{listStyle: 'none', padding: 0}}>
        {users.map((user) => (
          <li key={user.no}>
            <Link 
              to={`/users/${user.no}`}
              style={{
                display: 'block',
                padding: '10px',
                backgroundColor: '#f0f0f0',
                textDecoration: 'none',
                color: '#333',
                borderRadius: '5px',
                marginBottom: '10px'
              }}>{user.name} (ID: {user.no})</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default UserList