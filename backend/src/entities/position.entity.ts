import { Entity, Column, ManyToOne, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Player } from "./player.entity";

@Entity('position')
export class Position {
    @PrimaryGeneratedColumn({ name: 'playerId'})
    public playerId: number;

    @Column( {name: "positionType", nullable: true, length: 45 })
    positionType: string;


    @OneToMany(() => Player, player => player.position)
    player: Player[];
    

    constructor(positionType: string) {
        this.positionType = positionType;
    }
}