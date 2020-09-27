import { Entity, Column, ManyToOne, PrimaryGeneratedColumn, OneToMany, ManyToMany, JoinTable } from "typeorm";
import { Team } from "./team.entity";

@Entity('season')
export class Season {
    @PrimaryGeneratedColumn({ name: 'seasonId'})
    public seasonId: number;

    @Column( {name: "seasonDate", nullable: true, length: 45 })
    seasonDate: string;

    @ManyToMany(type => Team)
    @JoinTable()
    teams: Team[];

    constructor(seasonDate: string) {
        this.seasonDate = seasonDate;
    }
}