# 🚀 CI/CD 파이프라인 데모 프로젝트

간단한 Node.js 웹 애플리케이션으로 GitHub Actions CI/CD 파이프라인을 배워보세요!

## 📋 프로젝트 구조

```
cicd-demo-project/
├── app.js                    # Express 웹 서버
├── app.test.js              # 테스트 파일
├── package.json             # 프로젝트 설정
├── .github/
│   └── workflows/
│       └── ci-cd.yml        # CI/CD 파이프라인 설정
└── README.md
```

## 🔧 로컬에서 실행하기

### 1. 의존성 설치
```bash
npm install
```

### 2. 서버 실행
```bash
npm start
```

브라우저에서 `http://localhost:3000` 접속

### 3. 테스트 실행
```bash
npm test
```

## 🎯 CI/CD 파이프라인 동작 방식

### 파이프라인 단계

```
📥 코드 Push
   ↓
🧪 테스트 실행 (자동)
   ↓ (성공 시)
🔨 빌드 (자동)
   ↓ (성공 시)
🚀 배포 (main 브랜치만, 자동)
```

### 실제 파이프라인 흐름

1. **테스트 Job**
   - 코드 체크아웃
   - Node.js 환경 설정
   - 의존성 설치
   - 테스트 실행
   - 테스트 결과 저장

2. **빌드 Job** (테스트 통과 후)
   - 코드 체크아웃
   - Node.js 환경 설정
   - 의존성 설치
   - 빌드 확인

3. **배포 Job** (main/master 브랜치만)
   - 배포 정보 출력
   - 배포 완료 알림

## 🚀 GitHub에 올리고 테스트하기

### 1. GitHub 저장소 생성
1. GitHub.com 접속
2. 새 저장소 생성 (예: `cicd-demo-project`)
3. **README 추가하지 마세요** (이미 있음)

### 2. 코드 Push
```bash
git add .
git commit -m "Initial commit: CI/CD 파이프라인 설정"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/cicd-demo-project.git
git push -u origin main
```

### 3. Actions 탭에서 확인
1. GitHub 저장소의 **Actions** 탭 클릭
2. 파이프라인이 자동 실행되는 것 확인
3. 각 단계별 로그 확인

## ✨ 테스트해보기

### 테스트 1: 성공 케이스
```bash
# 간단한 변경사항 만들기
echo "console.log('테스트');" >> app.js
git add .
git commit -m "테스트: 작은 변경사항"
git push
```
→ Actions에서 모든 단계가 ✅ 성공하는 것 확인

### 테스트 2: 실패 케이스 (선택사항)
```bash
# 테스트가 실패하도록 코드 수정
# app.test.js에서 예상값 바꾸기
```
→ Actions에서 테스트 단계가 ❌ 실패하고 배포가 중단되는 것 확인

## 📊 확인할 수 있는 것들

- ✅ 자동 테스트 실행
- ✅ 테스트 통과/실패 여부
- ✅ 빌드 성공/실패
- ✅ 배포 자동화
- ✅ 각 단계별 상세 로그
- ✅ 실패 시 이메일 알림

## 🎓 배운 내용

1. **CI (Continuous Integration)**
   - 코드 푸시 시 자동 테스트
   - 문제를 빨리 발견

2. **CD (Continuous Deployment)**
   - 테스트 통과 후 자동 배포
   - 수동 작업 없이 배포

3. **GitHub Actions**
   - YAML 파일로 파이프라인 정의
   - Job 간 의존성 설정
   - 조건부 실행

## 🔗 다음 단계

- AWS, Azure, Vercel 등 실제 서버에 배포 연결
- Docker 이미지 빌드 추가
- 환경별 배포 (개발/스테이징/프로덕션)
- Slack, Discord 알림 연동

---

**만든 날짜:** 2026년 2월 4일
