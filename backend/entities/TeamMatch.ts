import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToOne,
} from "typeorm";
import { Match } from "./Match";
import { Team } from "./Team";

@Index("fk_match_team_idx", ["matchId"], {})
@Entity("team_match", { schema: "e-club" })
export class TeamMatch {
  @Column("int", { primary: true, name: "team_id" })
  teamId: number;

  @Column("int", { name: "match_id", nullable: true })
  matchId: number | null;

  @ManyToOne(() => Match, (match) => match.teamMatches, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "match_id", referencedColumnName: "matchId" }])
  match: Match;

  @OneToOne(() => Team, (team) => team.teamMatch, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "team_id", referencedColumnName: "teamId" }])
  team: Team;
}
