import React from 'react'
import { Link, useParams } from 'react-router-dom';
import '../styles/common.css'

function PostDetail() {

  const {category, postId} = useParams(); // {category: xx, postId: xx}
  // 게시글 데이터가 아래와 같다는 가정 
  const posts = {
    tech: [
      {no: 1, title: 'React 기초', content: 'React를 배워보자'},
      {no: 2, title: 'JavaScript ES6', content: 'ES6 문법 정리'},
    ],
    life: [
      {no: 1, title: '일상 이야기', content: '오늘 있었던 일'},
      {no: 2, title: '맛집 추천', content: '좋은 음식점 소개'},
    ]
  };

  const foundPost = posts[category]?.find((p) => p.no === Number(postId));

  return (
    <div>
      <h2>{foundPost ? '게시글 상세' : '게시글을 찾을 수 없습니다.'}</h2>
      {foundPost && (
        <div className="detail">
          <p><strong>카테고리:</strong >{category}</p>
          <p><strong>게시글 ID:</strong> {postId}</p>
          <p><strong>제목:</strong> {foundPost.title}</p>
          <p><strong>내용:</strong> {foundPost.content}</p>
        </div>
      )}
      <div style={{marginTop: '10px', textAlign: 'right'}}>
        <Link className="link" to="/posts">🔙 게시글 목록으로 돌아가기</Link>
      </div>
    </div>
  )
}

export default PostDetail