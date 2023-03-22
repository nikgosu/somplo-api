import {Body, Controller, Delete, Get, Param, Post, Put, Query} from '@nestjs/common';
import { AppService } from '../services/app.service';
import {Creative} from "../models/Creative";

@Controller('api/creative')
export class AppController {
  constructor(private readonly appService: AppService) {}

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

  @Get()
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
