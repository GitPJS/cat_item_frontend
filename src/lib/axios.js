import axios from 'axios';

const instance = axios.create({
  // 기본적으로 우리가 바라볼 서버의 주소
  baseURL: 'http://localhost:4000/',
  headers: {
    'content-type': 'application/json;charset=UTF-8',
    accept: 'application/json',
  },
});

export const apis = {
  // 게시물 불러오기
  getPost: () => instance.get('/posts'),
  getOnePost: (id) => instance.get(`/posts/${id}`),
  // 게시물 작성하기
  createPost: (contents) => instance.post('/posts', contents),
  // 게시물 수정하기
  editPost: (id, content) => instance.put(`/posts/${id}`, content),
  // 게시물 삭제하기
  delPost: (id) => instance.delete(`/posts/${id}`),

  //주승님 api
  //회원가입 함수
  //로그인 함수 
  //아이디 체크 함수
  //


  //은설님 api
  //덧글 불러오기 함수

//수정
//입력
//삭제



};