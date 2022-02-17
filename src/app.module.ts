import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from './category/category.entity';
import { CategoryModule } from './category/category.module';
import { Product } from './product/product.entity';
import { ProductModule } from './product/product.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb://localhost/inventory',
      synchronize: true,
      useUnifiedTopology: true,
      entities: [
        Product,
        Category
      ]
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: true
    }),
    ProductModule,
    CategoryModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
