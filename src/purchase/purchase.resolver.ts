import {
  Resolver,
  Query,
  Args,
  Mutation,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { ProductService } from 'src/product/product.service';
import { ProductType } from 'src/product/product.type';
import { Purchase } from './purchase.entity';
import { PurchaseInput } from './purchase.input';
import { PurchaseService } from './purchase.service';
import { PurchaseType } from './purchase.type';

@Resolver((of) => PurchaseType)
export class PurchaseResolver {
  constructor(
    private purchaseService: PurchaseService,
    private productService: ProductService,
  ) {}

  @Query((returns) => [PurchaseType])
  purchases() {
    return this.purchaseService.purchases();
  }

  @Query((returns) => PurchaseType)
  purchase(@Args('id') id: string) {
    return this.purchaseService.purchase(id);
  }

  @Mutation((returns) => PurchaseType)
  createPurchase(@Args('purchaseInput') purchaseInput: PurchaseInput) {
    return this.purchaseService.createPurchase(purchaseInput);
  }

  @Mutation((returns) => PurchaseType)
  updatePurchase(
    @Args('purchaseInput') purchaseInput: PurchaseInput,
    @Args('id') id: string,
  ) {
    return this.purchaseService.updatePurchase(purchaseInput, id);
  }

  @Mutation((returns) => PurchaseType)
  deletePurchase(@Args('id') id: string) {
    console.log(id);
    return this.purchaseService.deletePurchase(id);
  }

  @ResolveField((returns) => ProductType)
  product(@Parent() purchase: Purchase) {
    return this.productService.product(purchase.product);
  }
}
