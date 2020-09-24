import {MigrationInterface, QueryRunner} from "typeorm";

export class AddRole1600969329065 implements MigrationInterface {
    name = 'AddRole1600969329065'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `role` (`roleId` int NOT NULL AUTO_INCREMENT, `roleType` varchar(45) NULL, PRIMARY KEY (`roleId`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE `role`");
    }

}
