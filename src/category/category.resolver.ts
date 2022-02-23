import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { CategoryInput } from './category.input';
import { CategoryService } from './category.service';
import { CategoryType } from './category.type';
 
 @Resolver((of) => CategoryType)
 export class CategoryResolver {
   constructor(private categoryService: CategoryService) {}

   @Query((returns) => [CategoryType])
   async categories() {
     return this.categoryService.categories();
   }

   @Query((returns) => CategoryType)
   async category(@Args('id') id: string) {
     return this.categoryService.category(id);
   }

   @Mutation((returns) => CategoryType)
   async createCategory(@Args('categoryInput') categoryInput: CategoryInput) {
     return this.categoryService.createCategory(categoryInput);
   }

   @Mutation((returns) => CategoryType)
   async updateCategory(
     @Args('id') id: string,
     @Args('categoryInput') categoryInput: CategoryInput,
   ) {
     return this.categoryService.updateCategory(id, categoryInput);
   }

   @Mutation((returns) => CategoryType)
   async deleteCategory(@Args('id') id: string) {
     return this.categoryService.deleteCategory(id);
   }
 }
