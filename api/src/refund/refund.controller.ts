import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { RefundService } from './refund.service';
import { Refund } from './refund.entity';

@Controller('refunds')
export class RefundController {
  constructor(private refundService: RefundService) {}

  @Get()
  async findAll(): Promise<Refund[]> {
    return await this.refundService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Refund> {
    return await this.refundService.findOne(id);
  }

  @Post()
  async create(@Body() refund: Refund): Promise<Refund> {
    return await this.refundService.create(refund);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() refund: Refund): Promise<void> {
    await this.refundService.update(id, refund);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    await this.refundService.delete(id);
  }
}
