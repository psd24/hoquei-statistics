import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert, ManyToOne,ManyToMany, BeforeUpdate } from "typeorm"; 
import { hash } from "bcryptjs";
import { Role } from "./role.entity";
import { Exclude } from "class-transformer";
  
@Entity({ name: 'user' })
export class User {
    @PrimaryGeneratedColumn({ name: 'userId'})
    public userId: number;
  
    @Column({name: "userName", nullable: true, length: 45 })
    userName: string;
  
    @Column({name: "userEmail", nullable: true, length: 45 })
    userEmail: string;
  
    @Column({name: "userPassword", nullable: true, length: 255 })
    @Exclude()
    userPassword: string;

    @Column({name: "userToken", nullable: true, length: 45 })
    userToken: string;

    @Column({name: "userCreateAt", nullable: true, length: 45 })
    userCreateAt: string;

    @ManyToOne(() => Role, role => role.users)
    role: Role;

  
    @BeforeInsert()
    preProcess() {
      return hash(this.userPassword, 10).then(encrypted => this.userPassword = encrypted);
    }
  
    @BeforeUpdate()
    preProcessUpdate() {
      if (this.userPassword) {
        return hash(this.userPassword, 10).then(
          encrypted => (this.userPassword = encrypted),
        );
      }
    }
}