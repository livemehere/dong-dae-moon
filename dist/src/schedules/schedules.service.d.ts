import { Schedule } from './entities/schedule.entity';
import { CreateScheduleDto } from './dto/create-schedule.dto';
import { UpdateScheduleDto } from './dto/update-schedule.dto';
import { Repository } from 'typeorm';
export declare class SchedulesService {
    private scheduleRepository;
    constructor(scheduleRepository: Repository<Schedule>);
    create(createScheduleDto: CreateScheduleDto): string;
    findAll(): Promise<Schedule[]>;
    findOne(id: number): Promise<Schedule>;
    update(id: number, updateScheduleDto: UpdateScheduleDto): Promise<any>;
    remove(id: number): string;
}
