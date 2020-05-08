import { EntityRepository, Repository } from 'typeorm';

import Category from '../models/Category';

@EntityRepository(Category)
class TransactionsRepository extends Repository<Category> {
  public async checkCategory(title: string): Promise<Category> {
    const findCategory = await this.findOne({
      where: { title },
    });

    if (findCategory) return findCategory;

    const category = this.create({
      title,
    });

    await this.save(category);

    return category;
  }
}

export default TransactionsRepository;
