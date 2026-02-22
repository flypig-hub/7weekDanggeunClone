# 7weekDanggeunClone

## 1) 베이직 환경설정
```bash
cp .env.example .env
```

`.env` 값 예시:
```env
NODE_ENV=development
PORT=8080
MONGODB_URI=mongodb://127.0.0.1:27017/carrot
```

> `MONGODB_URI`를 비워두면 DB 연결 없이 API 서버만 실행됩니다.

## 2) 설치
```bash
npm install
```

## 3) 실행
```bash
npm start
```

## 4) 동작 확인
```bash
curl -sS http://127.0.0.1:8080/
```
정상 응답: `Backend Sever`

---

## npm SSL/프록시 이슈 빠른 복구 가이드
프록시 없이 실행하려면 아래를 먼저 1회 실행하세요.

```bash
unset HTTP_PROXY HTTPS_PROXY http_proxy https_proxy
unset npm_config_proxy npm_config_http_proxy npm_config_https_proxy
npm config delete proxy
npm config delete https-proxy
npm config delete http-proxy
npm config set registry https://registry.npmjs.org/
npm config set strict-ssl true
```

그다음 설치/실행:
```bash
npm cache clean --force
npm install
npm start
```
