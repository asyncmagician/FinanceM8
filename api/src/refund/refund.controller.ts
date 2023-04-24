import { Controller, Get, Post, Put, Delete, Param, Body, UseGuards } from '@nestjs/common';
import { RefundService } from './refund.service';
import { Refund } from './refund.entity';
import { AuthGuard } from '@nestjs/passport';

@Controller('refunds')
export class RefundController {
  constructor(private refundService: RefundService) {}

  @Get()
  @UseGuards(AuthGuard('jwt'))
  async findAll(): Promise<Refund[]> {
    return await this.refundService.findAll();
  }

  @Get(':id')
  @UseGuards(AuthGuard('jwt'))
  async findOne(@Param('id') id: number): Promise<Refund> {
    return await this.refundService.findOne(id);
  }

  @Post()
  @UseGuards(AuthGuard('jwt'))
  async create(@Body() refund: Refund): Promise<Refund> {
    return await this.refundService.create(refund);
  }

  @Put(':id')
  @UseGuards(AuthGuard('jwt'))
  async update(@Param('id') id: number, @Body() refund: Refund): Promise<void> {
    await this.refundService.update(id, refund);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  async delete(@Param('id') id: number): Promise<void> {
    await this.refundService.delete(id);
  }
}
