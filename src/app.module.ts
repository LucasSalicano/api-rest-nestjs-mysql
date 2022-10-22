import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {LivroController} from "./Controllers/livro.controller";
import {LivroService} from "./Services/livro.service";
import {SequelizeModule} from "@nestjs/sequelize";
import {Livro} from "./Models/livro.model";
import {ConfigModule} from "@nestjs/config";

@Module({
  imports: [
      ConfigModule.forRoot(),
      SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: 'api-nestjs',
      autoLoadModels: true,
      synchronize: true,
    }),
      SequelizeModule.forFeature([Livro])
  ],
  controllers: [AppController, LivroController],
  providers: [AppService, LivroService],
})
export class AppModule {}
