import {Module} from "@nestjs/common";
import {CreativesController} from "./controllers/creatives.controller";
import {CreativesService} from "./services/creatives.service";
import {MongooseModule} from "@nestjs/mongoose";
import {CreativeSchema} from "./models/Creative";
import {UserSchema} from "./models/User";
import {UserController} from "./controllers/user.controller";
import {UserService} from "./services/user.service";
import {JwtModule} from "@nestjs/jwt";
import {jwtConstants} from "./consts";
import {CampaignSchema} from "./models/Campaign";
import {CampaignsController} from "./controllers/campaigns.controller";
import {CampaignsService} from "./services/campaigns.service";
import {PlacementSchema} from "./models/Placement";
import {PlacementsService} from "./services/placements.service";
import {PlacementsController} from "./controllers/placements.controller";

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://Nikgosu:groyam3867@cluster0.gh57s.mongodb.net/?retryWrites=true&w=majority'),
    MongooseModule.forFeature([{name: 'Creative', schema: CreativeSchema}, {
      name: 'User',
      schema: UserSchema
    }, {name: 'Campaign', schema: CampaignSchema}, {name: 'Placement', schema: PlacementSchema}]),
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: {expiresIn: "60000s"}
    })
  ],
  controllers: [CreativesController, UserController, CampaignsController, PlacementsController],
  providers: [CreativesService, UserService, CampaignsService, PlacementsService],
})
export class AppModule {}
