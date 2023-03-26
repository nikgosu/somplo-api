import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {Campaign} from "../models/Campaign";

@Injectable()
export class CampaignsService {
  
  constructor(@InjectModel('Campaign') private readonly campaignModel: Model<Campaign>) {
  }
  async create(campaign: Campaign): Promise<Campaign> {
    const createdCampaign = new this.campaignModel(campaign);
    return createdCampaign.save();
  }
  
  async getAll(id: string): Promise<Campaign[]> {
    return this.campaignModel.find({userId: id}).exec();
  }
  
  async getOne(id): Promise<Campaign> {
    return this.campaignModel.findById(id);
  }
  
  async updatePlacementsCount(id): Promise<Campaign> {
    const campaign: any = await this.getOne(id)
    return this.campaignModel.findOneAndUpdate({_id: id}, {placements: campaign.placements + 1});
  }
  
  async updateCreativesCount(id): Promise<Campaign> {
    const campaign: any = await this.getOne(id)
    return this.campaignModel.findOneAndUpdate({_id: id}, {creatives: campaign.creatives + 1});
  }
}
