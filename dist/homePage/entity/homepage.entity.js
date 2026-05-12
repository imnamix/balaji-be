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
exports.EN_HomePage = void 0;
const swagger_1 = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
let EN_HomePage = class EN_HomePage {
};
exports.EN_HomePage = EN_HomePage;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], EN_HomePage.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: "integer", nullable: true, default: null }),
    __metadata("design:type", Number)
], EN_HomePage.prototype, "yearsInServiceCount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: "integer", nullable: true, default: null }),
    __metadata("design:type", Number)
], EN_HomePage.prototype, "customersCount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: "integer", nullable: true, default: null }),
    __metadata("design:type", Number)
], EN_HomePage.prototype, "projectsCount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: "integer", nullable: true, default: null }),
    __metadata("design:type", Number)
], EN_HomePage.prototype, "teamWorkersCount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: "json" }),
    __metadata("design:type", Array)
], EN_HomePage.prototype, "media", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: "varchar", length: 500, nullable: true, default: null }),
    __metadata("design:type", String)
], EN_HomePage.prototype, "bannerTitle", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: "text", nullable: true, default: null }),
    __metadata("design:type", String)
], EN_HomePage.prototype, "bannerDescription", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: "varchar", length: 500, nullable: true, default: null }),
    __metadata("design:type", String)
], EN_HomePage.prototype, "contactus_bg_image", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: "varchar", length: 500, nullable: true, default: null }),
    __metadata("design:type", String)
], EN_HomePage.prototype, "footer_bg_image", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: "varchar", length: 500, nullable: true, default: null }),
    __metadata("design:type", String)
], EN_HomePage.prototype, "mobile_banner_image", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.CreateDateColumn)({ type: "datetime" }),
    __metadata("design:type", Date)
], EN_HomePage.prototype, "created_at", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.UpdateDateColumn)({ type: "datetime" }),
    __metadata("design:type", Date)
], EN_HomePage.prototype, "updated_at", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ default: null, nullable: true }),
    __metadata("design:type", Number)
], EN_HomePage.prototype, "created_by", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ default: null, nullable: true }),
    __metadata("design:type", Number)
], EN_HomePage.prototype, "updated_by", void 0);
exports.EN_HomePage = EN_HomePage = __decorate([
    (0, typeorm_1.Entity)("homepage")
], EN_HomePage);
//# sourceMappingURL=homepage.entity.js.map