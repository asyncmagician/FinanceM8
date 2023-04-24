import { Controller, Get, Post, Put, Delete, Param, Body, UseGuards } from '@nestjs/common';
import { BalanceService } from './balance.service';
import { Balance } from './balance.entity';
import { AuthGuard } from '@nestjs/passport';

@Controller('balances')
export class BalanceController {
  constructor(private balanceService: BalanceService) {}

  @Get()
  @UseGuards(AuthGuard('jwt'))
  async findAll(): Promise<Balance[]> {
    return await this.balanceService.findAll();
  }

  @Get(':id')
  @UseGuards(AuthGuard('jwt'))
  async findOne(@Param('id') id: number): Promise<Balance> {
    return await this.balanceService.findOne(id);
  }

  @Post()
  @UseGuards(AuthGuard('jwt'))
  async create(@Body() balance: Balance): Promise<Balance> {
    return await this.balanceService.create(balance);
  }

  @Put(':id')
  @UseGuards(AuthGuard('jwt'))
  async update(@Param('id') id: number, @Body() balance: Balance): Promise<void> {
    await this.balanceService.update(id, balance);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  async delete(@Param('id') id: number): Promise<void> {
    await this.balanceService.delete(id);
  }
}
