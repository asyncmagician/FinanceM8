import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Refund } from './refund.entity';

@Injectable()
export class RefundService {
  constructor(
    @InjectRepository(Refund)
    private refundRepository: Repository<Refund>,
  ) {}

  async findAll(): Promise<Refund[]> {
    return await this.refundRepository.find();
  }

  async findOne(id: number): Promise<Refund> {
    return await this.refundRepository.findOne({ where: { id: id } });
}

  async create(refund: Refund): Promise<Refund> {
    return await this.refundRepository.save(refund);
  }

  async update(id: number, refund: Refund): Promise<void> {
    await this.refundRepository.update(id, refund);
  }

  async delete(id: number): Promise<void> {
    await this.refundRepository.delete(id);
  }
}
