import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
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
        Product
      ]
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: true
    }),
    ProductModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
