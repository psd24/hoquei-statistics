import { Entity, Column, ManyToOne, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { User } from "./user.entity";

@Entity('role')
export class Role {
    @PrimaryGeneratedColumn({ name: 'roleId'})
    public roleId: number;

    @Column( {name: "roleType", nullable: true, length: 45 })
    roleType: string;

    @OneToMany(() => User, user => user.role)
    users: User[];

    constructor(roleType: string) {
        this.roleType = roleType;
    }
}