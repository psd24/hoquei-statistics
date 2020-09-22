import { Column, Entity, OneToOne } from "typeorm";
import { SeasonTeam } from "./SeasonTeam";

@Entity("season", { schema: "e-club" })
export class Season {
  @Column("int", { primary: true, name: "season_id" })
  seasonId: number;

  @Column("date", { name: "season_data", nullable: true })
  seasonData: string | null;

  @OneToOne(() => SeasonTeam, (seasonTeam) => seasonTeam.season)
  seasonTeam: SeasonTeam;
}
