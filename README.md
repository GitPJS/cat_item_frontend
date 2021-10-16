# cat_Item_backend 🐱‍👓고양이용품 추천 사이트 프론트엔드 
<h2>사이트설명</h2> 
동거동락하는 소중한 고양이<br> 
집사들만의 노하우가 담긴 팁들이나 용품들을 소개 해 보아요.<br>
로그인,회원가입이 가능하고 이미지 파일과 내용등을 게시글 형태로 올려서 다른 집사들과 공유가 가능한 사이트 입니다. 
<h2>제작기간 팀원소개</h2> 
<li> 2021 10월11일 ~ 2021 10월 16일</li> 
<li>5인 1조 팀프로젝트<br>
  front-end: 박상수, 박주승, 류은설 <br> 
  back-end: 양주혁, 전은규 
<h2>사용기술</h2> 
<li>javascript</li> 
<li>React</li> 
<li>Redux</li> 
<li>react-router-dom</li>
<h2>주요기능</h2> 
<li>포스트 읽기, 수정, 삭제, 입력기능</li>
<li>이미지 업로드기능</li>
<li>회원가입, 로그인, 로그아웃, 로그인유지</li>
<h2>실행화면링크</h2>
http://tmahrm35.shop.s3-website.ap-northeast-2.amazonaws.com/
<h2>API설계</h2> 
 [API스프레드시트](https://docs.google.com/spreadsheets/d/1GvhNR2HwSWzPTe2v8AqtW1i7GKxYRQVDAgfor6uLf0o/edit#gid=0) 
 [API스웨거](http://stravinest.shop/swagger/) 
 [API스웨거사용법](https://velog.io/@stravinest/swagger-%EC%82%AC%EC%9A%A9%EB%B2%95%EB%A1%9C%EA%B7%B8%EC%9D%B8-%EC%9C%A0%EC%A7%80) 
 <h2>문제 해결</h2> 
 <h3>1. 백엔드 없이 프론트단에서만 데이터 처리를 어떻게 하지??</h3>
 처음 작업을 시작했을 때는 어떤방식으로 해야할지 감이 오지 않았다<br>
 우선 프론트에서 따로 작업을 한 이후 최종적으로 백엔드와 맞추면서 기능을 구현해야 할거 같은데<br>
 무슨 방식으로? 그때 마침 2기 멘토님이 강의를 해주셨다. 어떻게 협업을 해야 하는지 대한 팁을 주셨는데<br>
 프론트 쪽은 json-server를 이용하여 기능 구현을 한 뒤 나중에 백엔드와 맞춰보면서 작업을 진행하면 된다고 하셨다<br>
 mock-api 안에 더미값을 넣어주고 컴포넌트에 넘겨주었더니 값이 들어오는 것을 확인할 수 있었다.<br>
 
 <h3>2. 포스트 입력 값이 안들어감</h3>
 mock-api 값을 불러오는데는 성공했는데 이상하게 입력하는 부분이 안되는 것이다;;<br>
 좀 찾아봤더니 mock-api는 id 값이 저절로 들어가 있어서 mock-api 만들때는 반드시 id값에 숫자형 값을 추가해야만
 동작이 된다고 한다<br>
 
 <h3>3.이미지 업로드 후 입력 문제</h3>
 처음에는 프론트단에서 aws-s3를 이용해 이미지를 업로드 이후 불러와서 url값을 받아 입력값에 추가해서 입력해볼려고 했는데<br>
 보통 현업에서는 이런 방식으로는 안하고 formdata를 백엔드에 넘겨준 뒤 백엔드에서 formdata를 처리한 이후 url를 보내주는데<br>
 프론트에서 이 url값을 받아와서 입력한다고 한다. 그래서 file정보가 들어있는 formdata를 콘솔로그에 찍어봤는데 값이 안보이는 것이였다;;<br>
 formdata는 binary방식으로 콘솔로그에 찍으면 값이 원래 안보이고 어떤처리를 해줘야 보인다고 한다 실제로는 값이 잘 백엔드쪽으로 들어간다<br>
 
 <h3>4. 새로고침 이후 로그인 유지</h3>
 
 
 
 

 
 


