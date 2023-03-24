import { Module } from "@nestjs/common";
import { CreativesController } from "./controllers/creatives.controller";
import { CreativesService } from "./services/creatives.service";
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
      signOptions: { expiresIn: "60000s" }
    })
  ],
  controllers: [CreativesController, UserController,],
  providers: [CreativesService, UserService],
})
export class AppModule {}
