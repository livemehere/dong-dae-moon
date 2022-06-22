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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuyerController = void 0;
const common_1 = require("@nestjs/common");
const buyer_service_1 = require("./buyer.service");
const create_buyer_dto_1 = require("./dto/create-buyer.dto");
const update_buyer_dto_1 = require("./dto/update-buyer.dto");
let BuyerController = class BuyerController {
    constructor(buyerService) {
        this.buyerService = buyerService;
    }
    create(createBuyerDto) {
        return this.buyerService.create(createBuyerDto);
    }
    findAll() {
        return this.buyerService.findAll();
    }
    findOne(id) {
        return this.buyerService.findOne(+id);
    }
    update(id, updateBuyerDto) {
        return this.buyerService.update(+id, updateBuyerDto);
    }
    remove(id) {
        return this.buyerService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_buyer_dto_1.CreateBuyerDto]),
    __metadata("design:returntype", void 0)
], BuyerController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BuyerController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BuyerController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_buyer_dto_1.UpdateBuyerDto]),
    __metadata("design:returntype", void 0)
], BuyerController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BuyerController.prototype, "remove", null);
BuyerController = __decorate([
    (0, common_1.Controller)('buyers'),
    __metadata("design:paramtypes", [buyer_service_1.BuyerService])
], BuyerController);
exports.BuyerController = BuyerController;
//# sourceMappingURL=buyer.controller.js.map