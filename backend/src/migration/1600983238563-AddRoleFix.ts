import {MigrationInterface, QueryRunner} from "typeorm";

export class AddRoleFix1600983238563 implements MigrationInterface {
    name = 'AddRoleFix1600983238563'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user` DROP FOREIGN KEY `FK_ffe3092db843bd8f90fcfe97da7`");
        await queryRunner.query("ALTER TABLE `user` CHANGE `userName` `userName` varchar(45) NULL");
        await queryRunner.query("ALTER TABLE `user` CHANGE `userEmail` `userEmail` varchar(45) NULL");
        await queryRunner.query("ALTER TABLE `user` CHANGE `userPassword` `userPassword` varchar(45) NULL");
        await queryRunner.query("ALTER TABLE `user` CHANGE `userToken` `userToken` varchar(45) NULL");
        await queryRunner.query("ALTER TABLE `user` CHANGE `userCreateAt` `userCreateAt` varchar(45) NULL");
        await queryRunner.query("ALTER TABLE `user` CHANGE `roleRoleId` `roleRoleId` int NULL");
        await queryRunner.query("ALTER TABLE `role` CHANGE `roleType` `roleType` varchar(45) NULL");
        await queryRunner.query("ALTER TABLE `user` ADD CONSTRAINT `FK_ffe3092db843bd8f90fcfe97da7` FOREIGN KEY (`roleRoleId`) REFERENCES `role`(`roleId`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user` DROP FOREIGN KEY `FK_ffe3092db843bd8f90fcfe97da7`");
        await queryRunner.query("ALTER TABLE `role` CHANGE `roleType` `roleType` varchar(45) NULL DEFAULT 'NULL'");
        await queryRunner.query("ALTER TABLE `user` CHANGE `roleRoleId` `roleRoleId` int NULL DEFAULT 'NULL'");
        await queryRunner.query("ALTER TABLE `user` CHANGE `userCreateAt` `userCreateAt` varchar(45) NULL DEFAULT 'NULL'");
        await queryRunner.query("ALTER TABLE `user` CHANGE `userToken` `userToken` varchar(45) NULL DEFAULT 'NULL'");
        await queryRunner.query("ALTER TABLE `user` CHANGE `userPassword` `userPassword` varchar(45) NULL DEFAULT 'NULL'");
        await queryRunner.query("ALTER TABLE `user` CHANGE `userEmail` `userEmail` varchar(45) NULL DEFAULT 'NULL'");
        await queryRunner.query("ALTER TABLE `user` CHANGE `userName` `userName` varchar(45) NULL DEFAULT 'NULL'");
        await queryRunner.query("ALTER TABLE `user` ADD CONSTRAINT `FK_ffe3092db843bd8f90fcfe97da7` FOREIGN KEY (`roleRoleId`) REFERENCES `role`(`roleId`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

}
