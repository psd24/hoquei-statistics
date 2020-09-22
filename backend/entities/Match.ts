import { Column, Entity, OneToMany } from "typeorm";
import { PlayerMatch } from "./PlayerMatch";
import { TeamMatch } from "./TeamMatch";

@Entity("match", { schema: "e-club" })
export class Match {
  @Column("int", { primary: true, name: "match_id" })
  matchId: number;

  @Column("date", { name: "match_data", nullable: true })
  matchData: string | null;

  @Column("varchar", { name: "match_rival", nullable: true, length: 45 })
  matchRival: string | null;

  @OneToMany(() => PlayerMatch, (playerMatch) => playerMatch.matchPlayer)
  playerMatches: PlayerMatch[];

  @OneToMany(() => TeamMatch, (teamMatch) => teamMatch.match)
  teamMatches: TeamMatch[];
}
