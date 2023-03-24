import {Body, Controller, Delete, Get, Param, Post, Put, Query} from '@nestjs/common';
import { CreativesService } from '../services/creatives.service';
import {Creative} from "../models/Creative";

@Controller('api/creative')
export class Creatives {
  constructor(private readonly appService: CreativesService) {}

  @Get('api')
  getHello(): string {
    return this.appService.getHello();
  }
  @Post()
  async create(@Body() creative: Creative): Promise<Creative> {
    return this.appService.create(creative);
  }

  @Get()
  async getAll(): Promise<Creative[]> {
    return this.appService.getAll();
  }

  @Get('by_id')
  async getOne(@Query('id') id: string): Promise<Creative> {
    return this.appService.getOne(id);
  }

  @Put()
  async update(@Body() creative: Creative): Promise<Creative[]> {
    return this.appService.update(creative);
  }

  @Delete('api/creative')
  async delete(@Param('id') id: string): Promise<Creative> {
    return this.appService.delete(id);
  }
}