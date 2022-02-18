import { Resolver, Query, Args, Mutation, ResolveField, Parent } from '@nestjs/graphql';
import { CategoryService } from 'src/category/category.service';
import { CategoryType } from 'src/category/category.type';
import { Product } from './product.entity';
import { ProductInput } from './product.input';
import { ProductService } from './product.service';
import { ProductType } from './product.type';

@Resolver((of) => ProductType)
export class ProductResolver {
  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
  ) {}

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
    @Args('productInput') productInput: ProductInput,
    @Args('id') id: string,
  ) {
    return this.productService.updateProduct(productInput, id);
  }

  @Mutation((returns) => ProductType)
  deleteProduct(@Args('id') id: string) {
    return this.productService.deleteProduct(id);
  }

  @ResolveField((returns) => CategoryType)
  category(@Parent() product: Product) {
    return this.categoryService.category(product.category);
  }
}
