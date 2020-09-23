import { Column, Entity, OneToMany } from "typeorm";
import { User } from "./User.entity";

@Entity("role", { schema: "e-club" })
export class Role {
  @Column("int", { primary: true, name: "role_id" })
  roleId: number;

  @Column("varchar", { name: "role_type", nullable: true, length: 45 })
  roleType: string | null;

  @OneToMany(() => User, (user) => user.userRole)
  users: User[];
}
