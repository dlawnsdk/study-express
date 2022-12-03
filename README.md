** express에서 많이 쓰이는 미들웨어 **
1. basicauth-middleware : 기본적인 접근 인증
2. body-parser : HTTP 요청 바디 분석
3. busboy.multiparty, formidable, multer : multipart/form-data로 인코드된 요청 바디에 사용
4. compression : 응답 데이터를 gzip, deflate로 압충
5. cookie-parser : 쿠키
6. cookie-session : 쿠키 기반 세션
7. express-session : 세션 ID를 쿠키에 저장
8. csurf : 사이트 간 요청 위조 공격에 대비할 수 있게 도와줌
9. serve-index : 정적 파일의 디렉터리 리스트 지원
10. errorhandler : 클라이언트에 스택 추적과 오류 메시지 제공
11. serve-favicon : 파비콘(브라우저 타이틀 바에 나타나는 아이콘)을 전송
12. morgan : 자동 로그인 지원
13. method-override : x-http-method-overrid 요청 헤더 지원
14. response-time : 응답에 X-Response-Time 헤더를 추가해서 응답 시간을 밀리초 단위로 제공
15. static : 정적 파일 전송 지원
16. vhost : 가상 호스트