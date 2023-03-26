import {Body, Controller, Delete, Get, Param, Post, Put, Query} from '@nestjs/common';
import { CreativesService } from '../services/creatives.service';
import {Creative} from "../models/Creative";

@Controller('api/creative')
export class CreativesController {
  constructor(private readonly appService: CreativesService) {}
  @Post()
  async create(@Body() creative: Creative): Promise<Creative> {
    return this.appService.create(creative);
  }

  @Get()
  async getAll(@Query() query: any): Promise<Creative[]> {
    return this.appService.getAll(query);
  }

  @Get('by_id')
  async getOne(@Query('id') id: string): Promise<Creative> {
    return this.appService.getOne(id);
  }

  @Put()
  async update(@Body() creative: Creative): Promise<Creative[]> {
    return this.appService.update(creative);
  }

  @Delete()
  async delete(@Param('id') id: string): Promise<Creative> {
    return this.appService.delete(id);
  }
}
