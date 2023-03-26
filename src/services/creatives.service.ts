import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {Creative} from "../models/Creative";
import {CampaignsService} from "./campaigns.service";
import {PlacementsService} from "./placements.service";

@Injectable()
export class CreativesService {

  constructor(
    @InjectModel('Creative') private readonly creativeModel: Model<Creative>,
    private campaignsService: CampaignsService,
    private placementsService: PlacementsService,
  ) {
  }
  async create(creative: Creative): Promise<Creative> {
    const placement = await this.placementsService.getOne(creative.placementId)
    const createdCreative = new this.creativeModel({...creative, campaignId: placement.campaignId});
    return createdCreative.save();
  }

  async getAll(query: any): Promise<Creative[]> {
    if (query.placementId) {
      return this.creativeModel.find({placementId: query.placementId}).exec();
    } else {
      return this.creativeModel.find({userId: query.userId}).exec();
    }
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
