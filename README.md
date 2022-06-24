# 동대문 라이브 서버

## TODO ⚒

- [ ] CD 구축하기
- [ ] S3 API 작성
- [ ] SSL 설정
- [ ] 로드 밸런싱 설정
- [ ] Swagger 적용
- [ ] 로그인 명확하게
- [ ] JWT 사용유무

## Deploy

```bash
npm start
npm restart
```

## typeorm sync

```bash
# entity와 sync를 맞춰줌
npx typeorm schema:sync
```

## 추가 설치

```bash
npm install --save @nestjs/serve-static
npm install --save @nestjs/typeorm typeorm mysql2
npm i --save @nestjs/config
npm i --save class-validator class-transformer
npm i @nest-toolbox/http-logger-middleware
```

## RDS 설정

- 파라미터 그룹에서 time_zone 변경
- character_set 모두 변경

## Docker

```bash
docker run -d -it --name db -e MARIADB_ROOT_PASSWORD=<PASSWORD> -p 3306:3306 -v maria_volume:/var/lib/mysql mariadb
```

## EC2 환경

```bash
nvm
git
sudo iptables -t nat -A PREROUTING -p tcp --dport 80 -j REDIRECT --to-port 3000
```

## logs

```bash
$HOME/.pm2/logs
```
