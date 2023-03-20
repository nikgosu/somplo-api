import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {Creative} from "./models/Creative";

@Injectable()
export class AppService {

  constructor(@InjectModel('Creative') private readonly creativeModel: Model<Creative>) {
  }
  getHello(): string {
    return 'Hello World!';
  }
  async create(user: Creative): Promise<Creative> {
    const createdUser = new this.creativeModel(user);
    return createdUser.save();
  }

  async getAll(): Promise<Creative[]> {
    return this.creativeModel.find().exec();
  }

  async getOne(id): Promise<Creative> {
    return this.creativeModel.findById(id);
  }

  async update(creative): Promise<Creative[]> {
    return this.creativeModel.findOneAndUpdate(creative._id, creative);
  }

  async delete(id): Promise<Creative[]> {
    return this.creativeModel.findByIdAndDelete(id);
  }
}
