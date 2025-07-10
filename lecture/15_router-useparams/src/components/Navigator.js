import React from 'react'
import '../styles/common.css'
import { Link } from 'react-router-dom';

function Navigator() {
  return (
    <nav className="nav">
      <Link to="/" className="link">홈</Link>
      <Link to="/posts" className="link">게시글</Link>
      <Link to="/users" className="link">사용자</Link>
    </nav> 
  )
}

export default Navigator