import { Entity, Column, ManyToOne, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { User } from "./user.entity";
import { Team } from "./team.entity";

@Entity('club')
export class Club {
    @PrimaryGeneratedColumn({ name: 'clubId'})
    public clubId: number;

    @Column( {name: "clubName", nullable: true, length: 45 })
    clubName: string;

    @OneToMany(() => User, user => user.club)
    users: User[];

    @OneToMany(() => Team, team => team.club)
    teams: Team[];
    
    constructor(clubName: string) {
        this.clubName = clubName;
    }
}