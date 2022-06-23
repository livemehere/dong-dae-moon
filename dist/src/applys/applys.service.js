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
exports.ApplysService = void 0;
const schedule_entity_1 = require("./../schedules/entities/schedule.entity");
const product_entity_1 = require("../products/entities/product.entity");
const seller_entity_1 = require("./../sellers/entities/seller.entity");
const apply_entity_1 = require("./entities/apply.entity");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let ApplysService = class ApplysService {
    constructor(applyRepository, sellerRepository, productRepository, ScheduleRepository) {
        this.applyRepository = applyRepository;
        this.sellerRepository = sellerRepository;
        this.productRepository = productRepository;
        this.ScheduleRepository = ScheduleRepository;
    }
    async create(createApplyDto) {
        const seller = await this.sellerRepository.findOneBy({
            id: createApplyDto.seller_id,
        });
        const product = await this.productRepository.findOneBy({
            id: createApplyDto.product_id,
        });
        const schedule = await this.ScheduleRepository.findOneBy({
            id: createApplyDto.schedule_id,
        });
        if (!seller) {
            throw new common_1.BadRequestException(`id(${createApplyDto.seller_id}) seller is not exist`);
        }
        if (!product) {
            throw new common_1.BadRequestException(`id(${createApplyDto.product_id}) product is not exist`);
        }
        if (!schedule) {
            throw new common_1.BadRequestException(`id(${createApplyDto.schedule_id}) schedule is not exist`);
        }
        try {
            const newApply = new apply_entity_1.Apply();
            newApply.seller = seller;
            newApply.product = product;
            newApply.schedule = schedule;
            return this.applyRepository.save(newApply);
        }
        catch (e) {
            throw new common_1.BadRequestException(e.driverError.sqlMessage || e);
        }
    }
    findAll() {
        return this.applyRepository.find({
            relations: ['seller', 'product', 'schedule'],
        });
    }
    findOne(id) {
        return this.applyRepository.findOne({
            where: { id },
            relations: ['seller', 'product', 'schedule'],
        });
    }
    update(id, updateApplyDto) {
        return this.applyRepository.update(id, updateApplyDto);
    }
    remove(id) {
        return this.applyRepository.delete(id);
    }
};
ApplysService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(apply_entity_1.Apply)),
    __param(1, (0, typeorm_1.InjectRepository)(seller_entity_1.Seller)),
    __param(2, (0, typeorm_1.InjectRepository)(product_entity_1.Product)),
    __param(3, (0, typeorm_1.InjectRepository)(schedule_entity_1.Schedule)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], ApplysService);
exports.ApplysService = ApplysService;
//# sourceMappingURL=applys.service.js.map