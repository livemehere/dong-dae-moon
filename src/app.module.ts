import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SellersModule } from './sellers/sellers.module';
import { BuyersModule } from './buyers/buyers.module';
import { ImagesModule } from './images/images.module';
import { SchedulesModule } from './schedules/schedules.module';
import { ApplysModule } from './applys/applys.module';
import { QuestionsModule } from './questions/questions.module';
import { AnswersModule } from './answers/answers.module';
import { AdminModule } from './admin/admin.module';
import { HttpLoggerMiddleware } from '@nest-toolbox/http-logger-middleware';
import { LoginModule } from './login/login.module';
import { BuildingModule } from './building/building.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client'),
    }),
    TypeOrmModule.forRoot({
      type: 'mariadb',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: ['dist/**/*.entity.{ts,js}'],
      synchronize: true, //FIXME: 최종 배포시 false 로 변경
    }),
    SellersModule,
    BuyersModule,
    ImagesModule,
    SchedulesModule,
    ApplysModule,
    QuestionsModule,
    AnswersModule,
    AdminModule,
    LoginModule,
    BuildingModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(HttpLoggerMiddleware).forRoutes({
      path: '*',
      method: RequestMethod.ALL,
    });
  }
}
