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
exports.Apply = void 0;
const schedule_entity_1 = require("./../../schedules/entities/schedule.entity");
const product_entity_1 = require("../../products/entities/product.entity");
const seller_entity_1 = require("./../../sellers/entities/seller.entity");
const typeorm_1 = require("typeorm");
let Apply = class Apply {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Apply.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => seller_entity_1.Seller, (seller) => seller.applys),
    __metadata("design:type", seller_entity_1.Seller)
], Apply.prototype, "seller", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => product_entity_1.Product, (product) => product.applys),
    __metadata("design:type", product_entity_1.Product)
], Apply.prototype, "product", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => schedule_entity_1.Schedule, (schedule) => schedule.applys),
    __metadata("design:type", schedule_entity_1.Schedule)
], Apply.prototype, "schedule", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'tinyint', default: 0 }),
    __metadata("design:type", Number)
], Apply.prototype, "status", void 0);
Apply = __decorate([
    (0, typeorm_1.Entity)()
], Apply);
exports.Apply = Apply;
//# sourceMappingURL=apply.entity.js.map