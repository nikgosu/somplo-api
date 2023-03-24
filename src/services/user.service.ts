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
    const pureToken = token.split(': ')[1]
    const email = (this.jwtService.verify(pureToken, {}) as any).email
    const emailDoc = (this.jwtService.verify(pureToken, {}) as any)._doc?.email
    return this.userModel.findOne({ email: email ? email : emailDoc});
  }

  async login(user: any): Promise<User> {
    const validatedUser = await this.validateUser(user.email, user.password)

    if (validatedUser) {
      const authToken = await this.getToken(validatedUser)
      return this.userModel.findOneAndUpdate({email: user.email, password: user.password, token: authToken.token});
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
