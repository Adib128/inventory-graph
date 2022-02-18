import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductModule } from 'src/product/product.module';
import { Purchase } from './purchase.entity';
import { PurchaseResolver } from './purchase.resolver';
import { PurchaseService } from './purchase.service';

@Module({
  imports: [TypeOrmModule.forFeature([Purchase]), ProductModule],
  providers: [PurchaseResolver, PurchaseService]
})
export class PurchaseModule {}
