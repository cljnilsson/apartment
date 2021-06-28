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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const image_1 = __importDefault(require("./image"));
const tag_1 = __importDefault(require("./tag"));
let Apartment = class Apartment extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Apartment.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ length: 50 }),
    __metadata("design:type", String)
], Apartment.prototype, "title", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Apartment.prototype, "description", void 0);
__decorate([
    typeorm_1.OneToMany(() => image_1.default, image => image.parent, { eager: true }),
    __metadata("design:type", Array)
], Apartment.prototype, "images", void 0);
__decorate([
    typeorm_1.OneToMany(() => tag_1.default, t => t.parent, { eager: true }),
    __metadata("design:type", Array)
], Apartment.prototype, "tags", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Apartment.prototype, "buildingtype", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Apartment.prototype, "area", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Apartment.prototype, "price", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Apartment.prototype, "bedroom", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Apartment.prototype, "bathroom", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Apartment.prototype, "rooms", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Apartment.prototype, "floor", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Apartment.prototype, "maxfloor", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Apartment.prototype, "size", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], Apartment.prototype, "created", void 0);
Apartment = __decorate([
    typeorm_1.Entity()
], Apartment);
exports.default = Apartment;
