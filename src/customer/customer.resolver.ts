import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CustomerInput } from './customer.input';
import { CustomerService } from './customer.service';
import { CustomerType } from './customer.type';

@Resolver((of) => CustomerType)
export class CustomerResolver {
  constructor(private customerService: CustomerService) {}

  @Query((returns) => CustomerType)
  customer(@Args('id') id: string) {
    return this.customerService.customer(id);
  }

  @Query((returns) => [CustomerType])
  customers() {
    return this.customerService.customers();
  }

  @Mutation((returns) => CustomerType)
  createCustomer(@Args('customerInput') customerInput: CustomerInput) {
    return this.customerService.createCustomer(customerInput);
  }

  @Mutation((returns) => CustomerType)
  updateCustomer(
    @Args('customerInput') customerInput: CustomerInput,
    @Args('id') id: string,
  ) {
    return this.customerService.updateCustomer(customerInput, id);
  }

  @Mutation((returns) => CustomerType)
  deleteCustomer(@Args('id') id: string) {
    return this.customerService.deleteCustomer(id);
  }
}
