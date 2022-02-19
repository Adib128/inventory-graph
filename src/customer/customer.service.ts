import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Customer } from './customer.entity';
import { CustomerInput } from './customer.input';
import { v4 as uuid } from 'uuid';

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(Customer) private customerRepository: Repository<Customer>,
  ) {}

  async createCustomer(customerInput: CustomerInput): Promise<Customer> {
    const customer = this.customerRepository.create({
      id: uuid(),
      ...customerInput
    });
    return await this.customerRepository.save(customer);
  }

  async updateCustomer(
    customerInput: CustomerInput,
    id: string,
  ): Promise<Customer> {
    await this.customerRepository.update({ id }, customerInput);
    return await this.customerRepository.findOne({ id });
  }

  async customer(id: string): Promise<Customer> {
    return await this.customerRepository.findOne({ id });
  }

  async customers(): Promise<Customer[]> {
    return this.customerRepository.find();
  }

  async deleteCustomer(id: string): Promise<Customer> {
    const customer = await this.customer(id);
    await this.customerRepository.delete({ id });
    return customer;
  }
}
