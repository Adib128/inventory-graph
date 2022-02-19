import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { CustomerService } from 'src/customer/customer.service';
import { ProductService } from 'src/product/product.service';
import { Sale } from './sale.entity';
import { SaleInput } from './sale.input';
import { SaleService } from './sale.service';
import { SaleType } from './sale.type';

@Resolver((of) => SaleType)
export class SaleResolver {
  constructor(
    private saleServie: SaleService,
    private productService: ProductService,
    private customerService: CustomerService
  ) {}

  @Query((returns) => [SaleType])
  sales() {
    return this.saleServie.sales();
  }

  @Query((returns) => SaleType)
  sale(@Args('id') id: string) {
    return this.saleServie.sale(id);
  }

  @Mutation((returns) => SaleType)
  createSale(@Args('saleInput') saleInput: SaleInput) {
    return this.saleServie.createSale(saleInput);
  }

  @Mutation((returns) => SaleType)
  updateSale(@Args('saleInput') saleInput: SaleInput, @Args('id') id: string) {
    return this.saleServie.updateSale(saleInput, id);
  }

  @Mutation((returns) => SaleType)
  deleteSale(@Args('id') id: string) {
    console.log(id);
    return this.saleServie.deleteSale(id);
  }

  @ResolveField((returns) => SaleType)
  product(@Parent() sale: Sale) {
    return this.productService.product(sale.product);
  }

  @ResolveField((returns) => SaleType)
  customer(@Parent() sale: Sale) {
    return this.customerService.customer(sale.customer);
  }
}
