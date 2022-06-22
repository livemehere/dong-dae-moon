import { SchedulesService } from './schedules.service';
import { CreateScheduleDto } from './dto/create-schedule.dto';
import { UpdateScheduleDto } from './dto/update-schedule.dto';
export declare class SchedulesController {
    private readonly schedulesService;
    constructor(schedulesService: SchedulesService);
    create(createScheduleDto: CreateScheduleDto): string;
    findAll(): Promise<import("./entities/schedule.entity").Schedule[]>;
    findOne(id: string): Promise<import("./entities/schedule.entity").Schedule>;
    update(id: string, updateScheduleDto: UpdateScheduleDto): Promise<any>;
    remove(id: string): string;
}
