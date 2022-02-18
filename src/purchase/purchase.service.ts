import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Purchase } from './purchase.entity';
import { PurchaseInput } from './purchase.input';
import { v4 as uuid } from 'uuid';

@Injectable()
export class PurchaseService {
  constructor(
    @InjectRepository(Purchase)
    private purchaseRepository: Repository<Purchase>,
  ) {}

  async purchases(): Promise<Purchase[]> {
    return await this.purchaseRepository.find();
  }

  async purchase(id: string): Promise<Purchase> {
    return await this.purchaseRepository.findOne({id});
  }

  async createPurchase(purchaseInput: PurchaseInput): Promise<Purchase> {
    const purchase = this.purchaseRepository.create({
      id: uuid(),
      ...purchaseInput
    });
    return await this.purchaseRepository.save(purchase);
  }
}
