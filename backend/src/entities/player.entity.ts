import { Entity, Column, ManyToOne, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { User } from "./user.entity";
import { Position } from "./position.entity";

@Entity('player')
export class Player {
    @PrimaryGeneratedColumn({ name: 'playerId'})
    public playerId: number;

    @Column( {name: "playerName", nullable: true, length: 45 })
    playerName: string;

    @Column( {name: "playerNumber", nullable: true })
    playerNumber: number;

    @ManyToOne(() => User, user => user.player)
    users: User;

    @ManyToOne(() => Position, position => position.player)
    position: Position;

    constructor(playerName: string) {
        this.playerName = playerName;
    }
}