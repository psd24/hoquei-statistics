import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToOne,
} from "typeorm";
import { Season } from "./Season";
import { Team } from "./Team";

@Index("fk_team_season_idx", ["teamId"], {})
@Entity("season_team", { schema: "e-club" })
export class SeasonTeam {
  @Column("int", { primary: true, name: "season_id" })
  seasonId: number;

  @Column("int", { name: "team_id", nullable: true })
  teamId: number | null;

  @OneToOne(() => Season, (season) => season.seasonTeam, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "season_id", referencedColumnName: "seasonId" }])
  season: Season;

  @ManyToOne(() => Team, (team) => team.seasonTeams, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "team_id", referencedColumnName: "teamId" }])
  team: Team;
}
