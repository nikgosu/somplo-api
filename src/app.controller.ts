import {Body, Controller, Delete, Get, Param, Post, Put, Req} from '@nestjs/common';
import { AppService } from './app.service';
import {Creative} from "./models/Creative";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('api')
  getHello(): string {
    return this.appService.getHello();
  }
  @Post('api/creative')
  async create(@Body() creative: Creative): Promise<Creative> {
    return this.appService.create(creative);
  }

  @Get('api/creative')
  async getAll(): Promise<Creative[]> {
    return this.appService.getAll();
  }

  @Get('api/creative')
  async getOne(@Param('id') id: string): Promise<Creative[]> {
    return this.appService.getOne(id);
  }

  @Put('api/creative')
  async update(@Body() creative: Creative): Promise<Creative[]> {
    return this.appService.update(creative);
  }

  @Delete('api/creative')
  async delete(@Param('id') id: string): Promise<Creative[]> {
    return this.appService.delete(id);
  }
}
