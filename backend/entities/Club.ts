import { Column, Entity, OneToMany } from "typeorm";
import { Team } from "./Team";

@Entity("club", { schema: "e-club" })
export class Club {
  @Column("int", { primary: true, name: "club_id" })
  clubId: number;

  @Column("varchar", { name: "club_name", nullable: true, length: 45 })
  clubName: string | null;

  @OneToMany(() => Team, (team) => team.teamClub)
  teams: Team[];
}
