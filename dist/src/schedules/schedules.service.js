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
exports.SchedulesService = void 0;
const schedule_entity_1 = require("./entities/schedule.entity");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let SchedulesService = class SchedulesService {
    constructor(scheduleRepository) {
        this.scheduleRepository = scheduleRepository;
    }
    create(createScheduleDto) {
        return 'This action adds a new schedule';
    }
    findAll() {
        return this.scheduleRepository.find();
    }
    findOne(id) {
        return this.scheduleRepository.findOneBy({ id });
    }
    async update(id, updateScheduleDto) {
        var _a;
        try {
            return await this.scheduleRepository.update(id, updateScheduleDto);
        }
        catch (e) {
            return ((_a = e.driverError) === null || _a === void 0 ? void 0 : _a.sqlMessage) || e;
        }
    }
    remove(id) {
        return `This action removes a #${id} schedule`;
    }
};
SchedulesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(schedule_entity_1.Schedule)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], SchedulesService);
exports.SchedulesService = SchedulesService;
//# sourceMappingURL=schedules.service.js.map