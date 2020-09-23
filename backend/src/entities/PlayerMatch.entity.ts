import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Match } from "./Match.entity";
import { Player } from "./Player.entity";

@Index("fk_match_player_idx", ["matchPlayerId"], {})
@Index("fk_player_match_idx", ["playerMatchId"], {})
@Entity("player_match", { schema: "e-club" })
export class PlayerMatch {
  @Column("int", { primary: true, name: "player_statistics_id" })
  playerStatisticsId: number;

  @Column("int", { name: "player_statistics_goal", nullable: true })
  playerStatisticsGoal: number | null;

  @Column("int", { name: "player_statistics_card_blue", nullable: true })
  playerStatisticsCardBlue: number | null;

  @Column("varchar", {
    name: "player_statistics_card_red",
    nullable: true,
    length: 45,
  })
  playerStatisticsCardRed: string | null;

  @Column("int", { name: "player_match_id", nullable: true })
  playerMatchId: number | null;

  @Column("int", { name: "match_player_id", nullable: true })
  matchPlayerId: number | null;

  @ManyToOne(() => Match, (match) => match.playerMatches, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "match_player_id", referencedColumnName: "matchId" }])
  matchPlayer: Match;

  @ManyToOne(() => Player, (player) => player.playerMatches, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "player_match_id", referencedColumnName: "playerId" }])
  playerMatch: Player;
}
