import {MigrationInterface, QueryRunner} from "typeorm";

export class AddUser1600969435855 implements MigrationInterface {
    name = 'AddUser1600969435855'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `user` (`userId` int NOT NULL AUTO_INCREMENT, `userName` varchar(45) NULL, `userEmail` varchar(45) NULL, `userPassword` varchar(45) NULL, `userToken` varchar(45) NULL, `userCreateAt` varchar(45) NULL, `roleRoleId` int NULL, PRIMARY KEY (`userId`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `role` CHANGE `roleType` `roleType` varchar(45) NULL");
        await queryRunner.query("ALTER TABLE `user` ADD CONSTRAINT `FK_ffe3092db843bd8f90fcfe97da7` FOREIGN KEY (`roleRoleId`) REFERENCES `role`(`roleId`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user` DROP FOREIGN KEY `FK_ffe3092db843bd8f90fcfe97da7`");
        await queryRunner.query("ALTER TABLE `role` CHANGE `roleType` `roleType` varchar(45) NULL DEFAULT 'NULL'");
        await queryRunner.query("DROP TABLE `user`");
    }

}
