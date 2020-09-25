import { Column, Entity, OneToMany } from "typeorm";
import { Player } from "./Player";

@Entity("position", { schema: "e-club" })
export class Position {
  @Column("int", { primary: true, name: "position_id" })
  positionId: number;

  @Column("varchar", { name: "position_type", nullable: true, length: 45 })
  positionType: string | null;

  @OneToMany(() => Player, (player) => player.playerPosition)
  players: Player[];
}
