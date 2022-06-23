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
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const buyer_entity_1 = require("../buyers/entities/buyer.entity");
const typeorm_2 = require("typeorm");
const product_entity_1 = require("./entities/product.entity");
let ProductsService = class ProductsService {
    constructor(productRepository, buyerRepository) {
        this.productRepository = productRepository;
        this.buyerRepository = buyerRepository;
    }
    async create(createProductDto) {
        const buyer = await this.buyerRepository.findOneBy({
            id: createProductDto.buyer_id,
        });
        if (!buyer)
            throw new common_1.NotFoundException('바이어가 존재하지 않습니다');
        try {
            const newProduct = new product_entity_1.Product();
            newProduct.buyer = buyer;
            newProduct.description = createProductDto.description;
            newProduct.tags = createProductDto.tags;
            return await this.productRepository.save(newProduct);
        }
        catch (e) {
            throw new common_1.BadRequestException(e.driverError.sqlMessage || e);
        }
    }
    findAll() {
        return this.productRepository.find({
            relations: ['buyer', 'images', 'schedules'],
        });
    }
    findOne(id) {
        return this.productRepository.findOne({
            where: {
                id,
            },
            relations: ['buyer', 'images', 'schedules'],
        });
    }
    async update(id, updateProductDto) {
        var _a;
        try {
            return await this.productRepository.update(id, updateProductDto);
        }
        catch (e) {
            return ((_a = e.driverError) === null || _a === void 0 ? void 0 : _a.sqlMessage) || e;
        }
    }
    remove(id) {
        return this.productRepository.delete(id);
    }
};
ProductsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(product_entity_1.Product)),
    __param(1, (0, typeorm_1.InjectRepository)(buyer_entity_1.Buyer)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], ProductsService);
exports.ProductsService = ProductsService;
//# sourceMappingURL=products.service.js.map