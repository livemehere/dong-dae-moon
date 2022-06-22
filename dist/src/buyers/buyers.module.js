"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuyersModule = void 0;
const buyer_entity_1 = require("./entities/buyer.entity");
const typeorm_1 = require("@nestjs/typeorm");
const common_1 = require("@nestjs/common");
const buyers_service_1 = require("./buyers.service");
const buyers_controller_1 = require("./buyers.controller");
let BuyersModule = class BuyersModule {
};
BuyersModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([buyer_entity_1.Buyer])],
        controllers: [buyers_controller_1.BuyersController],
        providers: [buyers_service_1.BuyersService],
    })
], BuyersModule);
exports.BuyersModule = BuyersModule;
//# sourceMappingURL=buyers.module.js.map