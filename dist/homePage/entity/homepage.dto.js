"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomePageDTO = exports.MediaItem = void 0;
const swagger_1 = require("@nestjs/swagger");
class MediaItem {
}
exports.MediaItem = MediaItem;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], MediaItem.prototype, "media_url", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], MediaItem.prototype, "media_type", void 0);
class HomePageDTO {
}
exports.HomePageDTO = HomePageDTO;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], HomePageDTO.prototype, "yearsInServiceCount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], HomePageDTO.prototype, "customersCount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], HomePageDTO.prototype, "projectsCount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], HomePageDTO.prototype, "teamWorkersCount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [MediaItem] }),
    __metadata("design:type", Array)
], HomePageDTO.prototype, "media", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", String)
], HomePageDTO.prototype, "bannerTitle", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", String)
], HomePageDTO.prototype, "bannerDescription", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", String)
], HomePageDTO.prototype, "contactus_bg_image", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", String)
], HomePageDTO.prototype, "footer_bg_image", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", String)
], HomePageDTO.prototype, "mobile_banner_image", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], HomePageDTO.prototype, "created_by", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], HomePageDTO.prototype, "updated_by", void 0);
//# sourceMappingURL=homepage.dto.js.map