import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export default class AddColumnTitleInCategories1588853207165
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('categories', 'category');

    await queryRunner.addColumn(
      'categories',
      new TableColumn({
        name: 'title',
        type: 'varchar',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('categories', 'title');

    await queryRunner.addColumn(
      'categories',
      new TableColumn({
        name: 'category',
        type: 'varchar',
      }),
    );
  }
}
