import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class ProductUpdateMarketing1717746560986 implements MigrationInterface {
  name = "ProductUpdateMarketing1717746560986";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      "product",
      new TableColumn({
        name: "marketingContent",
        type: "text",
        isNullable: true,
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn("product", "marketingContent");
  }
}
