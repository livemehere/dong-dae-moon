"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplysModule = void 0;
const schedule_entity_1 = require("./../schedules/entities/schedule.entity");
const product_entity_1 = require("../products/entities/product.entity");
const seller_entity_1 = require("./../sellers/entities/seller.entity");
const typeorm_1 = require("@nestjs/typeorm");
const common_1 = require("@nestjs/common");
const applys_service_1 = require("./applys.service");
const applys_controller_1 = require("./applys.controller");
const apply_entity_1 = require("./entities/apply.entity");
let ApplysModule = class ApplysModule {
};
ApplysModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([apply_entity_1.Apply, seller_entity_1.Seller, product_entity_1.Product, schedule_entity_1.Schedule])],
        controllers: [applys_controller_1.ApplysController],
        providers: [applys_service_1.ApplysService],
    })
], ApplysModule);
exports.ApplysModule = ApplysModule;
//# sourceMappingURL=applys.module.js.map