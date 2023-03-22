import { Body, Controller, Get, Post, Request } from "@nestjs/common";
import { UserService } from "../services/user.service";

@Controller("api/user")
export class UserController {
  constructor(private readonly userService: UserService) {
  }

  @Get("auth")
  async isAuth(@Request() req) {
    const header = req.headers;
    return this.userService.auth(header.authorization);
  }

  @Post("login")
  async login(@Body() user: any): Promise<any> {
    return this.userService.login(user);
  }

  @Post("register")
  async register(@Body() user: any): Promise<any> {
    return this.userService.register(user);
  }
}
