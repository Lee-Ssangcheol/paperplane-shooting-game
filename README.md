# 종이비행기 슈팅게임

HTML5 Canvas를 사용한 웹 브라우저 슈팅 게임입니다.

## 실행 방법

### 웹 브라우저에서 실행
1. Python이 설치되어 있는 경우:
```bash
python -m http.server 8000
```
2. 브라우저에서 `http://localhost:8000` 접속

### 또는 직접 실행
`index.html` 파일을 웹 브라우저에서 직접 열어서 실행할 수 있습니다.

## 게임 조작 방법

- 방향키: 플레이어 이동
- 스페이스바: 총알 발사
- 게임 오버 시 스페이스바: 재시작

## 리소스 파일

게임에 필요한 리소스 파일들이 다음 위치에 있습니다:

### 이미지 파일
- `images/player.png` - 플레이어 종이비행기
- `images/enemy.png` - 적 비행기
- `images/BOSS.png` - 보스 비행기
- `images/snakeGroups.png` - 뱀 그룹 적
- `images/missile1.png` - 미사일 1
- `images/missile2.png` - 미사일 2

### 사운드 파일
- `sounds/shoot.mp3` - 발사 효과음
- `sounds/explosion.mp3` - 폭발 효과음
- `sounds/collision.mp3` - 충돌 효과음
- `sounds/warning.mp3` - 경고 효과음
- `sounds/levelup.mp3` - 레벨업 효과음

## 라이선스

ISC License