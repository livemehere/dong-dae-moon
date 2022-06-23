import { ApplysService } from './applys.service';
import { CreateApplyDto } from './dto/create-apply.dto';
import { UpdateApplyDto } from './dto/update-apply.dto';
export declare class ApplysController {
    private readonly applysService;
    constructor(applysService: ApplysService);
    create(createApplyDto: CreateApplyDto): Promise<import("./entities/apply.entity").Apply>;
    findAll(): Promise<import("./entities/apply.entity").Apply[]>;
    findOne(id: string): Promise<import("./entities/apply.entity").Apply>;
    update(id: string, updateApplyDto: UpdateApplyDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
