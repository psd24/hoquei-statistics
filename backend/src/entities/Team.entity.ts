import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
} from "typeorm";
import { SeasonTeam } from "./SeasonTeam.entity";
import { Club } from "./Club.entity";
import { TeamMatch } from "./TeamMatch.entity";
import { TeamPlayer } from "./TeamPlayer.entity";

@Index("fk_team_club_idx", ["teamClubId"], {})
@Entity("team", { schema: "e-club" })
export class Team {
  @Column("int", { primary: true, name: "team_id" })
  teamId: number;

  @Column("varchar", { name: "team_category", nullable: true, length: 45 })
  teamCategory: string | null;

  @Column("int", { name: "team_club_id", nullable: true })
  teamClubId: number | null;

  @OneToMany(() => SeasonTeam, (seasonTeam) => seasonTeam.team)
  seasonTeams: SeasonTeam[];

  @ManyToOne(() => Club, (club) => club.teams, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "team_club_id", referencedColumnName: "clubId" }])
  teamClub: Club;

  @OneToOne(() => TeamMatch, (teamMatch) => teamMatch.team)
  teamMatch: TeamMatch;

  @OneToMany(() => TeamPlayer, (teamPlayer) => teamPlayer.team)
  teamPlayers: TeamPlayer[];
}
