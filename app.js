// 간단한 Express 웹 서버
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// 정적 파일 제공
app.use(express.static(path.join(__dirname, 'public')));

// 홈 페이지
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// 헬스 체크 엔드포인트 (테스트용)
app.get('/health', (req, res) => {
  res.json({ 
    status: 'healthy', 
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    message: 'CI/CD Pipeline is working perfectly! 🎉'
  });
});

// 서버 시작
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`✅ 서버가 포트 ${PORT}에서 실행 중입니다`);
  });
}

module.exports = app;
