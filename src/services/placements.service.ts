import {Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {Placement} from "../models/Placement";
import {CampaignsService} from "./campaigns.service";

@Injectable()
export class PlacementsService {
  
  constructor(
    @InjectModel('Placement') private readonly placementModel: Model<Placement>,
    private campaignsService: CampaignsService
  ) {
  }
  
  async create(placement: Placement): Promise<Placement> {
    await this.campaignsService.updatePlacementsCount(placement.campaignId)
    const createdPlacement = new this.placementModel(placement);
    return createdPlacement.save();
  }
  
  async getAll(query: any): Promise<Placement[]> {
    if (query.campaignId) {
      return this.placementModel.find({campaignId: query.campaignId}).exec();
    } else {
      return this.placementModel.find({userId: query.userId}).exec();
    }
    
  }
  
  async getOne(id): Promise<Placement> {
    return this.placementModel.findById(id);
  }
}
