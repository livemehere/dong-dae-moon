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
exports.Seller = void 0;
const typeorm_1 = require("typeorm");
let Seller = class Seller {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Seller.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        default: 'seller',
        length: 100,
        comment: 'seller | buyer',
    }),
    __metadata("design:type", String)
], Seller.prototype, "userType", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        length: 100,
        unique: true,
        comment: '이메일',
    }),
    __metadata("design:type", String)
], Seller.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, comment: '비밀번호' }),
    __metadata("design:type", String)
], Seller.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, comment: '셀러 이름' }),
    __metadata("design:type", String)
], Seller.prototype, "username", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 30, comment: '전화번호' }),
    __metadata("design:type", String)
], Seller.prototype, "phone", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, unique: true, comment: '닉네임' }),
    __metadata("design:type", String)
], Seller.prototype, "nickname", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, comment: '지역' }),
    __metadata("design:type", String)
], Seller.prototype, "region", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, comment: '상호명' }),
    __metadata("design:type", String)
], Seller.prototype, "agency_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 0, comment: '랭크(권한 용도로 사용)' }),
    __metadata("design:type", Number)
], Seller.prototype, "rank", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true, comment: 'FCM 토큰' }),
    __metadata("design:type", String)
], Seller.prototype, "fcm_token", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'datetime',
        name: 'latest_active',
        default: null,
        comment: '최근 라이브 신청 날짜',
    }),
    __metadata("design:type", Date)
], Seller.prototype, "latest_active", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', comment: '푸시 알림 동의' }),
    __metadata("design:type", Boolean)
], Seller.prototype, "notification_agree", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'createdAt', comment: '생성일' }),
    __metadata("design:type", Date)
], Seller.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updatedAt', comment: '수정일' }),
    __metadata("design:type", Date)
], Seller.prototype, "updatedAt", void 0);
Seller = __decorate([
    (0, typeorm_1.Entity)()
], Seller);
exports.Seller = Seller;
//# sourceMappingURL=seller.entity.js.map