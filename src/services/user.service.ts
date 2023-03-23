import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User } from "../models/User";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class UserService {

  constructor(
    @InjectModel('User') private readonly userModel: Model<User>,
    private jwtService: JwtService
  ) {
  }

  async findOne(user): Promise<User> {
    return this.userModel.findOne(user);
  }

  async auth(token): Promise<User> {
    const email = (this.jwtService.verify(token, {}) as any).email
    const emailDoc = (this.jwtService.verify(token, {}) as any)._doc?.email
    console.log(email)
    return this.userModel.findOne({ email: email ? email : emailDoc});
  }

  async login(user: any): Promise<User> {
    const validatedUser = await this.validateUser(user.email, user.password)

    if (validatedUser) {
      const authToken = await this.getToken(validatedUser)
      const userWithNewToken = await this.userModel.findOneAndUpdate({ ...user, token: authToken.token })
      return userWithNewToken
    }
  }

  async register(user: any): Promise<User> {
    const authToken = await this.getToken(user)
    const createdUser = new this.userModel({ ...user, token: authToken.token });
    return createdUser.save();
  }

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.findOne({ email });
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async getToken(user: any) {
    return {
      token: this.jwtService.sign(user),
    };
  }
}
