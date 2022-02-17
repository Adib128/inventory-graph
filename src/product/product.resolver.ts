import { Resolver, Query, Args, Mutation, ResolveField, Parent } from '@nestjs/graphql';
import { ProductInput } from './product.input';
import { ProductService } from './product.service';
import { ProductType } from './product.type';

@Resolver((of) => ProductType)
export class ProductResolver {
  constructor(private productService: ProductService) {}
  
  @Query((returns) => ProductType)
  product(@Args('id') id: string) {
    return this.productService.product(id);
  }

  @Query((returns) => [ProductType])
  products() {
    return this.productService.products();
  }

  @Mutation((returns) => ProductType)
  createProduct(@Args('productInput') ProductInput: ProductInput) {
    return this.productService.createProduct(ProductInput);
  }

  @Mutation((returns) => ProductType)
  updateProduct(
    @Args('productInput') ProductInput: ProductInput,
    @Args('id') id: string,
  ) {
    return this.productService.updateProduct(ProductInput, id);
  }

  @Mutation((returns) => ProductType)
  deleteProduct(
    @Args('id') id: string
  ){
    return this.productService.deleteProduct(id);
  }
}
