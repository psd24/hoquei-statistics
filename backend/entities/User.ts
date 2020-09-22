import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Player } from "./Player";
import { Role } from "./Role";

@Index("fk_user_player_idx", ["userPlayerId"], {})
@Index("fk_user_role_idx", ["userRoleId"], {})
@Entity("user", { schema: "e-club" })
export class User {
  @Column("int", { primary: true, name: "user_id" })
  userId: number;

  @Column("varchar", { name: "user_name", nullable: true, length: 45 })
  userName: string | null;

  @Column("varchar", { name: "user_email", nullable: true, length: 45 })
  userEmail: string | null;

  @Column("varchar", { name: "user_password", nullable: true, length: 45 })
  userPassword: string | null;

  @Column("varchar", { name: "user_token", nullable: true, length: 45 })
  userToken: string | null;

  @Column("varchar", { name: "user_create_at", nullable: true, length: 45 })
  userCreateAt: string | null;

  @Column("int", { name: "user_role_id", nullable: true })
  userRoleId: number | null;

  @Column("int", { name: "user_player_id", nullable: true })
  userPlayerId: number | null;

  @ManyToOne(() => Player, (player) => player.users, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "user_player_id", referencedColumnName: "playerId" }])
  userPlayer: Player;

  @ManyToOne(() => Role, (role) => role.users, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "user_role_id", referencedColumnName: "roleId" }])
  userRole: Role;
}
