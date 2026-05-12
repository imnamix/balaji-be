export declare class MediaItem {
    media_url: string;
    media_type: string;
}
export declare class HomePageDTO {
    id: number;
    yearsInServiceCount: number;
    customersCount: number;
    projectsCount: number;
    teamWorkersCount: number;
    media: MediaItem[];
    bannerTitle?: string;
    bannerDescription?: string;
    contactus_bg_image?: string;
    footer_bg_image?: string;
    mobile_banner_image?: string;
    created_at: Date;
    updated_at: Date;
    created_by: number;
    updated_by: number;
}
