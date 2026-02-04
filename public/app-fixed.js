// 간단한 Express 웹 서버
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// 정적 파일 제공
app.use(express.static(path.join(__dirname, 'public')));

// 홈 페이지
app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>CI/CD 데모 - Interactive Gallery</title>
        <style>
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          body {
            font-family: 'Arial', sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 20px;
          }
          .container {
            background: white;
            border-radius: 20px;
            padding: 40px;
            max-width: 800px;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
          }
          h1 {
            color: #333;
            margin-bottom: 10px;
            font-size: 2.5em;
          }
          .success {
            color: #28a745;
            font-size: 1.2em;
            margin: 20px 0;
          }
          .info {
            color: #666;
            margin: 10px 0;
          }
          .gallery {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
            margin-top: 30px;
          }
          .card {
            background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
            border-radius: 15px;
            padding: 30px;
            text-align: center;
            transition: transform 0.3s, box-shadow 0.3s;
            cursor: pointer;
            text-decoration: none;
            color: white;
          }
          .card:hover {
            transform: translateY(-10px);
            box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
          }
          .card h3 {
            margin-bottom: 10px;
            font-size: 1.5em;
          }
          .card p {
            font-size: 0.9em;
            opacity: 0.9;
          }
          .emoji {
            font-size: 3em;
            margin-bottom: 10px;
          }
          .animation-card {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>🚀 CI/CD 파이프라인 성공!</h1>
          <p class="success">✅ GitHub Actions + Vercel 자동 배포 완료</p>
          <p class="info">배포 시간: ${new Date().toLocaleString('ko-KR')}</p>
          
          <div class="gallery">
            <a href="/animation.html" class="card animation-card">
              <div class="emoji">🎨</div>
              <h3>Interactive Animation</h3>
              <p>멀티컬러 파티클 애니메이션<br>클릭하여 체험하기!</p>
            </a>
            
            <div class="card">
              <div class="emoji">⚙️</div>
              <h3>CI/CD Pipeline</h3>
              <p>자동 테스트 + 빌드 + 배포<br>GitHub Actions</p>
            </div>
            
            <a href="/health" class="card" style="background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);">
              <div class="emoji">💚</div>
              <h3>Health Check</h3>
              <p>서버 상태 확인<br>API 엔드포인트</p>
            </a>
          </div>
        </div>
      </body>
    </html>
  `);
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
