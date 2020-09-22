import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Position } from "./Position";
import { PlayerMatch } from "./PlayerMatch";
import { TeamPlayer } from "./TeamPlayer";
import { User } from "./User";

@Index("fk_player_position_idx", ["playerPositionId"], {})
@Entity("player", { schema: "e-club" })
export class Player {
  @Column("int", { primary: true, name: "player_id" })
  playerId: number;

  @Column("varchar", { name: "player_name", nullable: true, length: 45 })
  playerName: string | null;

  @Column("varchar", { name: "player_number", nullable: true, length: 45 })
  playerNumber: string | null;

  @Column("int", { name: "player_position_id", nullable: true })
  playerPositionId: number | null;

  @ManyToOne(() => Position, (position) => position.players, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([
    { name: "player_position_id", referencedColumnName: "positionId" },
  ])
  playerPosition: Position;

  @OneToMany(() => PlayerMatch, (playerMatch) => playerMatch.playerMatch)
  playerMatches: PlayerMatch[];

  @OneToMany(() => TeamPlayer, (teamPlayer) => teamPlayer.player)
  teamPlayers: TeamPlayer[];

  @OneToMany(() => User, (user) => user.userPlayer)
  users: User[];
}
