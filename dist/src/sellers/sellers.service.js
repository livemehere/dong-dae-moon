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
exports.SellersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const seller_entity_1 = require("./entities/seller.entity");
const typeorm_2 = require("@nestjs/typeorm");
let SellersService = class SellersService {
    constructor(sellerRepository) {
        this.sellerRepository = sellerRepository;
    }
    async create(createSellerDto) {
        const newSeller = new seller_entity_1.Seller();
        newSeller.email = createSellerDto.email;
        newSeller.password = createSellerDto.password;
        newSeller.username = createSellerDto.username;
        newSeller.phone = createSellerDto.phone;
        newSeller.nickname = createSellerDto.nickname;
        newSeller.region = createSellerDto.region;
        newSeller.agency_name = createSellerDto.agency_name;
        newSeller.notification_agree = createSellerDto.notification_agree;
        try {
            return await this.sellerRepository.save(newSeller);
        }
        catch (e) {
            return e.driverError.sqlMessage;
        }
    }
    findAll() {
        return this.sellerRepository.find();
    }
    findOne(id) {
        return this.sellerRepository.findOneBy({ id });
    }
    async update(id, updateSellerDto) {
        try {
            return await this.sellerRepository.update(id, updateSellerDto);
        }
        catch (e) {
            return e.driverError.sqlMessage;
        }
    }
    remove(id) {
        return this.sellerRepository.delete(id);
    }
};
SellersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(seller_entity_1.Seller)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], SellersService);
exports.SellersService = SellersService;
//# sourceMappingURL=sellers.service.js.map