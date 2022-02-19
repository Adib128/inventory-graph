import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Sale } from './sale.entity';
import { v4 as uuid } from 'uuid';
import { SaleInput } from './sale.input';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductService } from 'src/product/product.service';

@Injectable()
export class SaleService {
  constructor(
    @InjectRepository(Sale) private saleRepository: Repository<Sale>,
    private productService: ProductService,
  ) {}

  async sales(): Promise<Sale[]> {
    return await this.saleRepository.find();
  }

  async sale(id: string): Promise<Sale> {
    return await this.saleRepository.findOne({ id });
  }

  async createSale(saleInput: SaleInput): Promise<Sale> {
    const sale = this.saleRepository.create({
      id: uuid(),
      ...saleInput,
    });
    // Calling to the function to update product quantity
    await this.productService.updateQuantitySale(sale.product, sale.quantity);
    return await this.saleRepository.save(sale);
  }

  async updateSale(saleInput: SaleInput, id: string): Promise<Sale> {
    await this.saleRepository.update({ id }, saleInput);
    return await this.saleRepository.findOne({ id });
  }

  async deleteSale(id: string): Promise<Sale> {
    const sale = await this.sale(id);
    this.saleRepository.delete({ id });
    return sale;
  }
}
