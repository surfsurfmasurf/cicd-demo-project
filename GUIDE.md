# 🎯 CI/CD 파이프라인 실습 가이드

## 📦 프로젝트 생성 완료!

다음 파일들이 생성되었습니다:

```
cicd-demo-project/
├── 📄 app.js                      # 간단한 웹 서버
├── 🧪 app.test.js                 # 자동 테스트 파일
├── 📋 package.json                # 프로젝트 설정
├── 📖 README.md                   # 상세 설명서
├── 🚫 .gitignore                  # Git 제외 파일
└── 📁 .github/workflows/
    └── ⚙️ ci-cd.yml              # CI/CD 파이프라인 설정
```

---

## 🚀 GitHub에 올리는 방법 (3단계)

### Step 1: GitHub에서 새 저장소 만들기

1. https://github.com 접속 후 로그인
2. 우측 상단 `+` 클릭 → `New repository` 선택
3. 저장소 이름 입력: `cicd-demo-project`
4. ⚠️ **중요**: "Add a README file" 체크 **해제**
5. `Create repository` 클릭

### Step 2: 로컬에서 코드 Push

터미널에서 다음 명령어 실행:

```bash
# 1. 프로젝트 폴더로 이동
cd /home/claude/cicd-demo-project

# 2. Git 설정 (처음 한 번만)
git config --global user.email "your-email@example.com"
git config --global user.name "Your Name"

# 3. 파일 추가 및 커밋
git add .
git commit -m "Initial commit: CI/CD pipeline setup"

# 4. 브랜치 이름 변경 (main으로)
git branch -M main

# 5. GitHub 저장소 연결
git remote add origin https://github.com/YOUR_USERNAME/cicd-demo-project.git

# 6. Push!
git push -u origin main
```

### Step 3: Actions 확인

1. GitHub 저장소 페이지로 이동
2. 상단 **Actions** 탭 클릭
3. 🎉 파이프라인이 자동으로 실행되는 것을 확인!

---

## 🔍 파이프라인이 하는 일

```
┌─────────────────────────────────────────────────┐
│  개발자가 코드를 GitHub에 Push                     │
└──────────────────┬──────────────────────────────┘
                   │
                   ▼
┌─────────────────────────────────────────────────┐
│  🧪 JOB 1: 테스트                                │
│  ├─ 코드 다운로드                                 │
│  ├─ Node.js 설치                                │
│  ├─ npm install                                 │
│  └─ npm test ✅                                 │
└──────────────────┬──────────────────────────────┘
                   │ (테스트 통과하면)
                   ▼
┌─────────────────────────────────────────────────┐
│  🔨 JOB 2: 빌드                                  │
│  ├─ 코드 다운로드                                 │
│  ├─ Node.js 설치                                │
│  ├─ npm install                                 │
│  └─ 빌드 확인 ✅                                 │
└──────────────────┬──────────────────────────────┘
                   │ (빌드 성공하면)
                   ▼
┌─────────────────────────────────────────────────┐
│  🚀 JOB 3: 배포 (main 브랜치만)                   │
│  ├─ 배포 정보 출력                                │
│  └─ 배포 완료! 🎉                                │
└─────────────────────────────────────────────────┘
```

---

## ✅ 성공 시나리오

```
✅ Test Job       (약 30초)
  ├─ 📥 Checkout code
  ├─ 🟢 Setup Node.js
  ├─ 📦 Install dependencies
  └─ 🧪 Run tests ✅ PASS

✅ Build Job      (약 20초)
  ├─ 📥 Checkout code
  ├─ 🟢 Setup Node.js
  ├─ 📦 Install dependencies
  └─ ✅ Build complete

✅ Deploy Job     (약 10초)
  └─ 🚀 Deployment successful!

총 소요 시간: ~60초
```

---

## ❌ 실패 시나리오 (테스트 실패)

```
❌ Test Job       (약 25초)
  ├─ 📥 Checkout code
  ├─ 🟢 Setup Node.js
  ├─ 📦 Install dependencies
  └─ 🧪 Run tests ❌ FAIL

⏸️  Build Job     (실행 안 됨)
⏸️  Deploy Job    (실행 안 됨)

→ 이메일로 실패 알림 받음
→ 배포가 자동으로 중단됨 (안전!)
```

---

## 🎮 테스트해보기

### 테스트 1: 간단한 변경 후 Push

```bash
# 파일에 주석 추가
echo "// 테스트 변경" >> app.js

# Git commit & push
git add .
git commit -m "test: 간단한 변경사항"
git push

# → GitHub Actions에서 자동 실행 확인!
```

### 테스트 2: Pull Request 만들기

```bash
# 새 브랜치 생성
git checkout -b feature/test-feature

# 변경사항 추가
echo "console.log('새 기능');" >> app.js

# Push
git add .
git commit -m "feat: 새 기능 추가"
git push -u origin feature/test-feature

# → GitHub에서 Pull Request 생성
# → Actions가 자동으로 테스트 실행!
```

---

## 💡 알아두면 좋은 것들

### GitHub Actions의 장점
- ✅ 무료 (공개 저장소는 무제한)
- ✅ GitHub와 완벽한 통합
- ✅ 설정이 간단함
- ✅ 다양한 언어 지원

### 실제 사용 사례
- 🔹 코드 푸시할 때마다 자동 테스트
- 🔹 Pull Request에 자동으로 테스트 결과 표시
- 🔹 main 브랜치 병합 시 자동 배포
- 🔹 실패하면 이메일/슬랙 알림

### 다음 단계로 발전시키기
- 🚀 실제 서버에 배포 (AWS, Vercel 등)
- 🐳 Docker 이미지 빌드 및 배포
- 📊 코드 품질 체크 추가 (ESLint, SonarQube)
- 🔐 보안 취약점 스캔
- 📱 모바일 앱 빌드 및 배포

---

## 🆘 문제 해결

### Push가 안 될 때
```bash
# 원격 저장소 URL 확인
git remote -v

# URL이 잘못되었다면 수정
git remote set-url origin https://github.com/YOUR_USERNAME/cicd-demo-project.git
```

### Actions가 실행 안 될 때
- Actions 탭에서 워크플로우가 활성화되어 있는지 확인
- .github/workflows/ci-cd.yml 파일이 올바른 위치에 있는지 확인

### 테스트가 실패할 때
- Actions 탭에서 상세 로그 확인
- 로컬에서 `npm test` 실행해서 확인

---

**🎓 축하합니다! 이제 CI/CD 파이프라인을 이해하고 사용할 수 있습니다!**

더 궁금한 점이 있으면 언제든지 물어보세요! 😊
