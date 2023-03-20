import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {MongooseModule} from "@nestjs/mongoose";
import {CreativeSchema} from "./models/Creative";

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://Nikgosu:groyam3867@cluster0.gh57s.mongodb.net/?retryWrites=true&w=majority'), MongooseModule.forFeature([{ name: 'Creative', schema: CreativeSchema }])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
