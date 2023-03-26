import {Body, Controller, Get, Post, Query} from '@nestjs/common';
import {Placement} from "../models/Placement";
import {PlacementsService} from "../services/placements.service";

@Controller('api/placement')
export class PlacementsController {
  constructor(private readonly placementsService: PlacementsService) {
  }
  
  @Post()
  async create(@Body() campaign: Placement): Promise<Placement> {
    return this.placementsService.create(campaign);
  }
  
  @Get()
  async getAll(@Query() query: any): Promise<Placement[]> {
    return this.placementsService.getAll(query);
  }
  
  @Get('by_id')
  async getOne(@Query('id') id: string): Promise<Placement> {
    return this.placementsService.getOne(id);
  }
}
