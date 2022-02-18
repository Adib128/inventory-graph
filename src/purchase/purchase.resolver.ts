import { Resolver, Query, Args, Mutation, ResolveField, Parent } from '@nestjs/graphql';
import { ProductService } from 'src/product/product.service';
import { ProductType } from 'src/product/product.type';
import { Purchase } from './purchase.entity';
import { PurchaseInput } from './purchase.input';
import { PurchaseService } from './purchase.service';
import { PurchaseType } from './purchase.type';

@Resolver()
export class PurchaseResolver {
  constructor(
    private purchaseService: PurchaseService,
    private productService: ProductService,
  ) {}

  @Query((returns) => [PurchaseType])
  async purchases() {
    return this.purchaseService.purchases();
  }

  @Query((returns) => PurchaseType)
  async purchase(@Args('id') id: string) {
    return this.purchaseService.purchase(id);
  }

  @Mutation((returns) => PurchaseType)
  createPurchase(@Args('purchaseInput') purchaseInput: PurchaseInput) {
    return this.purchaseService.createPurchase(purchaseInput);
  }

}
