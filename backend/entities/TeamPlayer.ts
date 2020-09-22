import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Player } from "./Player";
import { Team } from "./Team";

@Index("player_id_idx", ["playerId"], {})
@Index("team_id_idx", ["teamId"], {})
@Entity("team_player", { schema: "e-club" })
export class TeamPlayer {
  @Column("int", { name: "team_id" })
  teamId: number;

  @Column("int", { name: "player_id" })
  playerId: number;

  @ManyToOne(() => Player, (player) => player.teamPlayers, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "player_id", referencedColumnName: "playerId" }])
  player: Player;

  @ManyToOne(() => Team, (team) => team.teamPlayers, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "team_id", referencedColumnName: "teamId" }])
  team: Team;
}
