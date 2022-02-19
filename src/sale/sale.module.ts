import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerModule } from 'src/customer/customer.module';
import { ProductModule } from 'src/product/product.module';
import { Sale } from './sale.entity';
import { SaleResolver } from './sale.resolver';
import { SaleService } from './sale.service';

@Module({
  imports: [TypeOrmModule.forFeature([Sale]), ProductModule, CustomerModule],
  providers: [SaleResolver, SaleService],
})
export class SaleModule {}
