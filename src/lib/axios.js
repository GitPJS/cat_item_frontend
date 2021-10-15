import axios from 'axios';

const instance = axios.create({
  // 기본적으로 우리가 바라볼 서버의 주소
  baseURL: 'http://stravinest.shop/',
  headers: {
    'content-type': 'application/json;charset=UTF-8',
    accept: 'application/json',
  },
});

export const apis = {
  // 게시물 불러오기
  getPost: () => instance.get('/api/posts'),
  getOnePost: (id) => instance.get(`/api/posts/${id}`),
  createPost: (contents) => instance.post('/api/posts/postImageUrl', contents),
  // 게시물 수정하기
  edit_Post: (id, content) => instance.put(`/api/posts/modifyImageUrl/${id}`, content),
  // 게시물 삭제하기
  delPost: (id) => instance.patch(`api/posts/delete/${id}`),
  upload: (data) => instance.post('/api/posts/upload',data),
  //회원가입
  signUp: (data) => instance.post('/api/register', data),
  //로그인
  login : (data) => instance.post('/api/login', data)


  //은설님 api
  //덧글 불러오기 함수

//수정
//입력
//삭제



};