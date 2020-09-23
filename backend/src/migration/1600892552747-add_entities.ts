import {MigrationInterface, QueryRunner} from "typeorm";

export class addEntities1600892552747 implements MigrationInterface {
    name = 'addEntities1600892552747'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `season` (`season_id` int NOT NULL, `season_data` date NULL, PRIMARY KEY (`season_id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `season_team` (`season_id` int NOT NULL, `team_id` int NULL, INDEX `fk_team_season_idx` (`team_id`), UNIQUE INDEX `REL_d9d5ab3e0947919aa7ff4b9210` (`season_id`), PRIMARY KEY (`season_id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `position` (`position_id` int NOT NULL, `position_type` varchar(45) NULL, PRIMARY KEY (`position_id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `team_player` (`team_id` int NOT NULL, `player_id` int NOT NULL, INDEX `team_id_idx` (`team_id`), INDEX `player_id_idx` (`player_id`), PRIMARY KEY (`team_id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `role` (`role_id` int NOT NULL, `role_type` varchar(45) NULL, PRIMARY KEY (`role_id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `user` (`user_id` int NOT NULL, `user_name` varchar(45) NULL, `user_email` varchar(45) NULL, `user_password` varchar(45) NULL, `user_token` varchar(45) NULL, `user_create_at` varchar(45) NULL, `user_role_id` int NULL, `user_player_id` int NULL, INDEX `fk_user_role_idx` (`user_role_id`), INDEX `fk_user_player_idx` (`user_player_id`), PRIMARY KEY (`user_id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `player` (`player_id` int NOT NULL, `player_name` varchar(45) NULL, `player_number` varchar(45) NULL, `player_position_id` int NULL, INDEX `fk_player_position_idx` (`player_position_id`), PRIMARY KEY (`player_id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `player_match` (`player_statistics_id` int NOT NULL, `player_statistics_goal` int NULL, `player_statistics_card_blue` int NULL, `player_statistics_card_red` varchar(45) NULL, `player_match_id` int NULL, `match_player_id` int NULL, INDEX `fk_player_match_idx` (`player_match_id`), INDEX `fk_match_player_idx` (`match_player_id`), PRIMARY KEY (`player_statistics_id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `match` (`match_id` int NOT NULL, `match_data` date NULL, `match_rival` varchar(45) NULL, PRIMARY KEY (`match_id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `team_match` (`team_id` int NOT NULL, `match_id` int NULL, INDEX `fk_match_team_idx` (`match_id`), UNIQUE INDEX `REL_28f81e373324c2ff12e449ba4d` (`team_id`), PRIMARY KEY (`team_id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `team` (`team_id` int NOT NULL, `team_category` varchar(45) NULL, `team_club_id` int NULL, INDEX `fk_team_club_idx` (`team_club_id`), PRIMARY KEY (`team_id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `club` (`club_id` int NOT NULL, `club_name` varchar(45) NULL, PRIMARY KEY (`club_id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `season_team` ADD CONSTRAINT `FK_d9d5ab3e0947919aa7ff4b92106` FOREIGN KEY (`season_id`) REFERENCES `season`(`season_id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `season_team` ADD CONSTRAINT `FK_b296fd08d655a1f12f62ee6573a` FOREIGN KEY (`team_id`) REFERENCES `team`(`team_id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `team_player` ADD CONSTRAINT `FK_a6f4fcfc1c7229fbcb67c6fb4b2` FOREIGN KEY (`player_id`) REFERENCES `player`(`player_id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `team_player` ADD CONSTRAINT `FK_ac195c6f3ba8962bd9f11cc400d` FOREIGN KEY (`team_id`) REFERENCES `team`(`team_id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `user` ADD CONSTRAINT `FK_bb483cf97971348784f2e7d5867` FOREIGN KEY (`user_player_id`) REFERENCES `player`(`player_id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `user` ADD CONSTRAINT `FK_078f27c5e6a46cb1ab1b9fd463b` FOREIGN KEY (`user_role_id`) REFERENCES `role`(`role_id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `player` ADD CONSTRAINT `FK_2204b39a38fb78ec3dbedc95c98` FOREIGN KEY (`player_position_id`) REFERENCES `position`(`position_id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `player_match` ADD CONSTRAINT `FK_72b2f8a9ffe239a9ee02035ee2b` FOREIGN KEY (`match_player_id`) REFERENCES `match`(`match_id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `player_match` ADD CONSTRAINT `FK_6ca3573e46ca7e676f31bed002b` FOREIGN KEY (`player_match_id`) REFERENCES `player`(`player_id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `team_match` ADD CONSTRAINT `FK_a4a28634593185afd675927c695` FOREIGN KEY (`match_id`) REFERENCES `match`(`match_id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `team_match` ADD CONSTRAINT `FK_28f81e373324c2ff12e449ba4d0` FOREIGN KEY (`team_id`) REFERENCES `team`(`team_id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `team` ADD CONSTRAINT `FK_ebd72ea953c1b2aa6db13f7fd65` FOREIGN KEY (`team_club_id`) REFERENCES `club`(`club_id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `team` DROP FOREIGN KEY `FK_ebd72ea953c1b2aa6db13f7fd65`");
        await queryRunner.query("ALTER TABLE `team_match` DROP FOREIGN KEY `FK_28f81e373324c2ff12e449ba4d0`");
        await queryRunner.query("ALTER TABLE `team_match` DROP FOREIGN KEY `FK_a4a28634593185afd675927c695`");
        await queryRunner.query("ALTER TABLE `player_match` DROP FOREIGN KEY `FK_6ca3573e46ca7e676f31bed002b`");
        await queryRunner.query("ALTER TABLE `player_match` DROP FOREIGN KEY `FK_72b2f8a9ffe239a9ee02035ee2b`");
        await queryRunner.query("ALTER TABLE `player` DROP FOREIGN KEY `FK_2204b39a38fb78ec3dbedc95c98`");
        await queryRunner.query("ALTER TABLE `user` DROP FOREIGN KEY `FK_078f27c5e6a46cb1ab1b9fd463b`");
        await queryRunner.query("ALTER TABLE `user` DROP FOREIGN KEY `FK_bb483cf97971348784f2e7d5867`");
        await queryRunner.query("ALTER TABLE `team_player` DROP FOREIGN KEY `FK_ac195c6f3ba8962bd9f11cc400d`");
        await queryRunner.query("ALTER TABLE `team_player` DROP FOREIGN KEY `FK_a6f4fcfc1c7229fbcb67c6fb4b2`");
        await queryRunner.query("ALTER TABLE `season_team` DROP FOREIGN KEY `FK_b296fd08d655a1f12f62ee6573a`");
        await queryRunner.query("ALTER TABLE `season_team` DROP FOREIGN KEY `FK_d9d5ab3e0947919aa7ff4b92106`");
        await queryRunner.query("DROP TABLE `club`");
        await queryRunner.query("DROP INDEX `fk_team_club_idx` ON `team`");
        await queryRunner.query("DROP TABLE `team`");
        await queryRunner.query("DROP INDEX `REL_28f81e373324c2ff12e449ba4d` ON `team_match`");
        await queryRunner.query("DROP INDEX `fk_match_team_idx` ON `team_match`");
        await queryRunner.query("DROP TABLE `team_match`");
        await queryRunner.query("DROP TABLE `match`");
        await queryRunner.query("DROP INDEX `fk_match_player_idx` ON `player_match`");
        await queryRunner.query("DROP INDEX `fk_player_match_idx` ON `player_match`");
        await queryRunner.query("DROP TABLE `player_match`");
        await queryRunner.query("DROP INDEX `fk_player_position_idx` ON `player`");
        await queryRunner.query("DROP TABLE `player`");
        await queryRunner.query("DROP INDEX `fk_user_player_idx` ON `user`");
        await queryRunner.query("DROP INDEX `fk_user_role_idx` ON `user`");
        await queryRunner.query("DROP TABLE `user`");
        await queryRunner.query("DROP TABLE `role`");
        await queryRunner.query("DROP INDEX `player_id_idx` ON `team_player`");
        await queryRunner.query("DROP INDEX `team_id_idx` ON `team_player`");
        await queryRunner.query("DROP TABLE `team_player`");
        await queryRunner.query("DROP TABLE `position`");
        await queryRunner.query("DROP INDEX `REL_d9d5ab3e0947919aa7ff4b9210` ON `season_team`");
        await queryRunner.query("DROP INDEX `fk_team_season_idx` ON `season_team`");
        await queryRunner.query("DROP TABLE `season_team`");
        await queryRunner.query("DROP TABLE `season`");
    }

}
