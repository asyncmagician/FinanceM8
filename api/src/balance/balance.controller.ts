import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { BalanceService } from './balance.service';
import { Balance } from './balance.entity';

@Controller('balances')
export class BalanceController {
  constructor(private balanceService: BalanceService) {}

  @Get()
  async findAll(): Promise<Balance[]> {
    return await this.balanceService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Balance> {
    return await this.balanceService.findOne(id);
  }

  @Post()
  async create(@Body() balance: Balance): Promise<Balance> {
    return await this.balanceService.create(balance);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() balance: Balance): Promise<void> {
    await this.balanceService.update(id, balance);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    await this.balanceService.delete(id);
  }
}
