import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {Creative} from "../models/Creative";
import {CampaignsService} from "./campaigns.service";

@Injectable()
export class CreativesService {

  constructor(
    @InjectModel('Creative') private readonly creativeModel: Model<Creative>,
    private campaignsService: CampaignsService
  ) {
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
    const {_id, ...rest} = creative
    return this.creativeModel.findOneAndUpdate(creative._id, rest);
  }

  async delete(id): Promise<Creative> {
    return this.creativeModel.findOneAndDelete(id);
  }
}
