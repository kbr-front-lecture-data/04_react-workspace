import React from 'react'
import { Link } from 'react-router-dom'
import common from '../styles/common.css';

function Navigator() {
  return (
    <nav 
      style={{
        padding: '20px',
        backgroundColor: '#f0f0f0',
        borderBottom: '1px solid #ccc',
      }}>
      <Link to="/" style={{marginRight: '20px'}}>홈</Link>
      <Link to="/about" style={{marginRight: '20px'}}>소개</Link>
      <Link to="/contact" style={{marginRight: '20px'}}>연락처</Link>
    </nav> 
  )
}

export default Navigator