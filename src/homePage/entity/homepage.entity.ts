import { ApiProperty } from "@nestjs/swagger";
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { MediaItem } from "./homepage.dto";

@Entity("homepage")
export class EN_HomePage {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column({ type: "integer", nullable: true, default: null })
  yearsInServiceCount: number;

  @ApiProperty()
  @Column({ type: "integer", nullable: true, default: null })
  customersCount: number;

  @ApiProperty()
  @Column({ type: "integer", nullable: true, default: null })
  projectsCount: number;

  @ApiProperty()
  @Column({ type: "integer", nullable: true, default: null })
  teamWorkersCount: number;

  @ApiProperty()
  @Column({ type: "json" })
  media: MediaItem[];

  @ApiProperty()
  @Column({ type: "varchar", length: 500, nullable: true, default: null })
  bannerTitle: string;

  @ApiProperty()
  @Column({ type: "text", nullable: true, default: null })
  bannerDescription: string;

  @ApiProperty()
  @Column({ type: "varchar", length: 500, nullable: true, default: null })
  contactus_bg_image: string;
  
  @ApiProperty()
  @Column({ type: "varchar", length: 500, nullable: true, default: null })
  footer_bg_image: string;

  @ApiProperty()
  @Column({ type: "varchar", length: 500, nullable: true, default: null })
  mobile_banner_image: string;

  @ApiProperty()
  @CreateDateColumn({ type: "datetime" })
  created_at: Date;

  @ApiProperty()
  @UpdateDateColumn({ type: "datetime" })
  updated_at: Date;

  @ApiProperty()
  @Column({ default: null, nullable: true })
  created_by: number;

  @ApiProperty()
  @Column({ default: null, nullable: true })
  updated_by: number;
}
