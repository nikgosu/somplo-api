import { Module } from "@nestjs/common";
import { AppController } from "./controllers/app.controller";
import { AppService } from "./services/app.service";
import { MongooseModule } from "@nestjs/mongoose";
import { CreativeSchema } from "./models/Creative";
import { UserSchema } from "./models/User";
import { UserController } from "./controllers/user.controller";
import { UserService } from "./services/user.service";
import { JwtModule } from "@nestjs/jwt";
import { jwtConstants } from "./consts";

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://Nikgosu:groyam3867@cluster0.gh57s.mongodb.net/?retryWrites=true&w=majority'),
    MongooseModule.forFeature([{ name: 'Creative', schema: CreativeSchema }, {name: 'User', schema: UserSchema}]),
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: "5m" }
    })
  ],
  controllers: [AppController, UserController,],
  providers: [AppService, UserService],
})
export class AppModule {}
