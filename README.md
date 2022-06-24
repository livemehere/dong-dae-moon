# 동대문 라이브 서버

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
```

## DB 세팅 쿼리

```sql
SET GLOBAL time_zone='+09:00'; //한국시간으로 맞추기 +9시간

# RDS 쓰는거면 `파라미터 그룹 수정해야됨`
```

## RDS 설정

- 파라미터 그룹에서 time_zone, character_set 모두 변경해줘야됨 (한국시간, 한글)

## Docker

```bash
docker run -d -it --name db -e MARIADB_ROOT_PASSWORD=<PASSWORD> -p 3306:3306 -v maria_volume:/var/lib/mysql mariadb
```
