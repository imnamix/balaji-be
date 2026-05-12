import { ApiProperty } from "@nestjs/swagger";

export class MediaItem {
  @ApiProperty()
  media_url: string;

  @ApiProperty()
  media_type: string;
}
export class HomePageDTO {
  id: number;

  @ApiProperty()
  yearsInServiceCount: number;

  @ApiProperty()
  customersCount: number;

  @ApiProperty()
  projectsCount: number;

  @ApiProperty()
  teamWorkersCount: number;

  @ApiProperty({ type: [MediaItem] })
  media: MediaItem[];

  @ApiProperty({ required: false })
  bannerTitle?: string;

  @ApiProperty({ required: false })
  bannerDescription?: string;

  @ApiProperty({ required: false })
  contactus_bg_image?: string;
  
  @ApiProperty({ required: false })
  footer_bg_image?: string;

  @ApiProperty({ required: false })
  mobile_banner_image?: string;

  created_at: Date;
  updated_at: Date;

  @ApiProperty()
  created_by: number;
  @ApiProperty()
  updated_by: number;
}
