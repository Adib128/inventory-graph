import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './category.entity';
import { CategoryInput } from './category.input';
import { v4 as uuid } from 'uuid';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}

  async categories(): Promise<Category[]> {
    return await this.categoryRepository.find();
  }

  async category(id: string): Promise<Category> {
    return await this.categoryRepository.findOne({ id });
  }

  async createCategory(categoryInput: CategoryInput): Promise<Category> {
    const category = this.categoryRepository.create({
      id: uuid(),
      ...categoryInput,
    });
    this.categoryRepository.save(category);
    return category;
  }

  async updateCategory(
    id: string,
    categoryInput: CategoryInput,
  ): Promise<Category> {
    await this.categoryRepository.update({ id }, categoryInput);
    return await this.category(id);
  }

  async deleteCategory(id: string): Promise<Category> {
    const category = await this.category(id);
    await this.categoryRepository.delete({ id });
    return category;
  }
}
