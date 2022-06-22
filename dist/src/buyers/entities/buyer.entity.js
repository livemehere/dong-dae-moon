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
exports.Buyer = void 0;
const typeorm_1 = require("typeorm");
let Buyer = class Buyer {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Buyer.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        default: 'buyer',
        length: 100,
        comment: 'seller | buyer',
    }),
    __metadata("design:type", String)
], Buyer.prototype, "userType", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        length: 100,
        unique: true,
        comment: '이메일',
    }),
    __metadata("design:type", String)
], Buyer.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, comment: '비밀번호' }),
    __metadata("design:type", String)
], Buyer.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, comment: '셀러 이름' }),
    __metadata("design:type", String)
], Buyer.prototype, "username", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 30, comment: '전화번호' }),
    __metadata("design:type", String)
], Buyer.prototype, "phone", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', comment: '사업자 등록증 사진 URL' }),
    __metadata("design:type", String)
], Buyer.prototype, "business_registration", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 0, comment: '빌딩 ID(참조)' }),
    __metadata("design:type", Number)
], Buyer.prototype, "building_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, comment: '가게 이름' }),
    __metadata("design:type", String)
], Buyer.prototype, "store_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 200, comment: '가게 주소' }),
    __metadata("design:type", String)
], Buyer.prototype, "store_address", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        length: 200,
        comment: '빌딩에서의 가게가 위치한 층',
    }),
    __metadata("design:type", String)
], Buyer.prototype, "building_floor", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        length: 200,
        comment: '층에서 가게가 위치한 섹션',
    }),
    __metadata("design:type", String)
], Buyer.prototype, "building_section", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        length: 200,
        comment: '가게의 방 번호',
    }),
    __metadata("design:type", String)
], Buyer.prototype, "building_room", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 0, comment: '랭크(권한 용도로 사용)' }),
    __metadata("design:type", Number)
], Buyer.prototype, "rank", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true, comment: 'FCM 토큰' }),
    __metadata("design:type", String)
], Buyer.prototype, "fcm_token", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'datetime',
        name: 'latest_active',
        default: null,
        comment: '최근 라이브 신청 날짜',
    }),
    __metadata("design:type", Date)
], Buyer.prototype, "latest_active", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', comment: '푸시 알림 동의' }),
    __metadata("design:type", Boolean)
], Buyer.prototype, "notification_agree", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'createdAt', comment: '생성일' }),
    __metadata("design:type", Date)
], Buyer.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updatedAt', comment: '수정일' }),
    __metadata("design:type", Date)
], Buyer.prototype, "updatedAt", void 0);
Buyer = __decorate([
    (0, typeorm_1.Entity)()
], Buyer);
exports.Buyer = Buyer;
//# sourceMappingURL=buyer.entity.js.map