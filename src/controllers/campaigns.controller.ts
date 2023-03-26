import {Body, Controller, Get, Post, Query} from '@nestjs/common';
import {Campaign} from "../models/Campaign";
import {CampaignsService} from "../services/campaigns.service";

@Controller('api/campaign')
export class CampaignsController {
  constructor(private readonly campaignsService: CampaignsService) {
  }
  
  @Post()
  async create(@Body() campaign: Campaign): Promise<Campaign> {
    return this.campaignsService.create(campaign);
  }
  
  @Get()
  async getAll(@Query('id') id: string): Promise<Campaign[]> {
    return this.campaignsService.getAll(id);
  }
  
  @Get('by_id')
  async getOne(@Query('id') id: string): Promise<Campaign> {
    return this.campaignsService.getOne(id);
  }
}
