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
exports.BuyersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const buyer_entity_1 = require("./entities/buyer.entity");
let BuyersService = class BuyersService {
    constructor(buyerRepository) {
        this.buyerRepository = buyerRepository;
    }
    async create(createBuyerDto) {
        const newBuyer = new buyer_entity_1.Buyer();
        newBuyer.email = createBuyerDto.email;
        newBuyer.password = createBuyerDto.password;
        newBuyer.username = createBuyerDto.username;
        newBuyer.phone = createBuyerDto.phone;
        newBuyer.business_registration = createBuyerDto.business_registration;
        newBuyer.building_id = createBuyerDto.building_id;
        newBuyer.store_name = createBuyerDto.store_name;
        newBuyer.store_address = createBuyerDto.store_address;
        newBuyer.building_floor = createBuyerDto.building_floor;
        newBuyer.building_section = createBuyerDto.building_section;
        newBuyer.building_room = createBuyerDto.building_room;
        newBuyer.notification_agree = createBuyerDto.notification_agree;
        try {
            return await this.buyerRepository.save(newBuyer);
        }
        catch (e) {
            return e.driverError.sqlMessage;
        }
    }
    findAll() {
        return this.buyerRepository.find();
    }
    findOne(id) {
        return this.buyerRepository.findOneBy({ id });
    }
    async update(id, updateBuyerDto) {
        try {
            return await this.buyerRepository.update(id, updateBuyerDto);
        }
        catch (e) {
            return e.driverError.sqlMessage;
        }
    }
    remove(id) {
        return this.buyerRepository.delete(id);
    }
};
BuyersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(buyer_entity_1.Buyer)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], BuyersService);
exports.BuyersService = BuyersService;
//# sourceMappingURL=buyers.service.js.map