import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {Creative} from "../models/Creative";

@Injectable()
export class CreativesService {

  constructor(@InjectModel('Creative') private readonly creativeModel: Model<Creative>) {
  }
  async create(creative: Creative): Promise<Creative> {
    const createdCreative = new this.creativeModel(creative);
    return createdCreative.save();
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

  async delete(id): Promise<Creative> {
    return this.creativeModel.findOneAndDelete(id);
  }
}
