import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.entity';
import { v4 as uuid } from 'uuid';
import { ProductInput } from './product.input';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product) private productRepository: Repository<Product>,
  ) {}

  async createProduct(productInput: ProductInput): Promise<Product> {
    const product = this.productRepository.create({
      id: uuid(),
      ...productInput,
      quantity: 0,
    });
    return await this.productRepository.save(product);
  }

  async updateProduct(
    productInput: ProductInput,
    id: string,
  ): Promise<Product> {
    await this.productRepository.update({ id }, productInput);
    return await this.productRepository.findOne({ id });
  }

  async product(id: string): Promise<Product> {
    return await this.productRepository.findOne({ id });
  }

  async products(): Promise<Product[]> {
    return this.productRepository.find();
  }

  async deleteProduct(id: string): Promise<Product> {
    const product = await this.product(id);
    await this.productRepository.delete({ id });
    return product;
  }
}
