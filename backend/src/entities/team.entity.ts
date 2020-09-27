import { Entity, Column, ManyToOne, PrimaryGeneratedColumn, OneToMany, ManyToMany, JoinTable } from "typeorm";
import { Club } from "./club.entity";
import { Player } from "./player.entity";

@Entity('team')
export class Team {
    @PrimaryGeneratedColumn({ name: 'teamId'})
    public teamId: number;

    @Column( {name: "teamCategory", nullable: true, length: 45 })
    teamCategory: string;

    @ManyToOne(() => Club, club => club.teams)
    club: Club;

    @ManyToMany(type => Player)
    @JoinTable()
    players: Player[];

    constructor(teamCategory: string) {
        this.teamCategory = teamCategory;
    }
}