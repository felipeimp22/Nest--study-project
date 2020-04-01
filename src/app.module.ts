import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/shared/users.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose'
@Module({
  imports: [MongooseModule.forRoot('mongodb://127.0.0.1:27017/nest', { useNewUrlParser: true, useUnifiedTopology: true }), UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
