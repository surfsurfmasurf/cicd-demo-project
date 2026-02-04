// 간단한 Express 웹 서버
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// 홈 페이지
app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>CI/CD 데모</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            max-width: 800px;
            margin: 50px auto;
            padding: 20px;
            text-align: center;
          }
          .success {
            color: #28a745;
            font-size: 24px;
          }
        </style>
      </head>
      <body>
        <h1>🚀 CI/CD 파이프라인 테스트 성공!</h1>
        <p class="success">이 페이지는 자동 배포되었습니다!</p>
        <p>현재 시간: ${new Date().toLocaleString('ko-KR')}</p>
      </body>
    </html>
  `);
});

// 헬스 체크 엔드포인트 (테스트용)
app.get('/health', (req, res) => {
  res.json({ status: 'healthy', timestamp: new Date().toISOString() });
});

// 서버 시작
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`✅ 서버가 포트 ${PORT}에서 실행 중입니다`);
  });
}

module.exports = app;
