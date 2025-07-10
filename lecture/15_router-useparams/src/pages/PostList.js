import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/common.css'

function PostList() {
  return (
    <div>
      <h2>게시글 목록</h2>
      <h3>기술 카테고리</h3>
      <ul>
        <li><Link to="/posts/tech/1" className="link">React 기초</Link></li>
        <li><Link to="/posts/tech/2" className="link">JavaScript ES6</Link></li>
      </ul>
      <h3>일상 카테고리</h3>
      <ul>
        <li><Link to="/posts/life/1" className="link">일상 이야기</Link></li>
        <li><Link to="/posts/life/2" className="link">맛집 추천</Link></li>
      </ul>
    </div>
  )
}

export default PostList