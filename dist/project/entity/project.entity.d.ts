import { status } from "../../global/system.enums";
import { availableOptions, DataType, MediaItem, projectWalkthrough } from "./project.dto";
export declare class EN_Project {
    id: number;
    name: string;
    reraId: string;
    headline: string;
    subHeadline: string;
    tagline: string;
    projectOverviewSection: DataType[];
    locationAdvantage: DataType[];
    projectWalkthrough: projectWalkthrough[];
    availableOptions: availableOptions[];
    projectSpecification: DataType[];
    amenities: DataType[];
    description: string;
    media: MediaItem[];
    gallery: MediaItem[];
    masterPlan: MediaItem[];
    location: string;
    floorPlan: MediaItem[];
    status: status;
    created_at: Date;
    updated_at: Date;
    created_by: number;
    updated_by: number;
}
