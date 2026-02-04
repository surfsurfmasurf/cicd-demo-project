const request = require('supertest');
const app = require('./app');

describe('웹 애플리케이션 테스트', () => {
  test('홈페이지가 정상적으로 로드되는지 확인', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toContain('CI/CD 파이프라인');
  });

  test('헬스 체크 엔드포인트가 작동하는지 확인', async () => {
    const response = await request(app).get('/health');
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('status', 'healthy');
    expect(response.body).toHaveProperty('timestamp');
  });

  test('존재하지 않는 페이지는 404를 반환', async () => {
    const response = await request(app).get('/nonexistent');
    expect(response.statusCode).toBe(404);
  });
});
