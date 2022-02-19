import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from './category/category.entity';
import { CategoryModule } from './category/category.module';
import { Product } from './product/product.entity';
import { ProductModule } from './product/product.module';
import { Purchase } from './purchase/purchase.entity';
import { PurchaseModule } from './purchase/purchase.module';
import { CustomerModule } from './customer/customer.module';
import { Customer } from './customer/customer.entity';
import { SaleModule } from './sale/sale.module';
import { Sale } from './sale/sale.entity';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb://localhost/inventory',
      synchronize: true,
      useUnifiedTopology: true,
      entities: [
        Product,
        Category,
        Purchase,
        Customer,
        Sale
      ]
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: true
    }),
    ProductModule,
    CategoryModule,
    PurchaseModule,
    CustomerModule,
    SaleModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
