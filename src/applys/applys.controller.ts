import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { ApplysService } from './applys.service';
import { CreateApplyDto } from './dto/create-apply.dto';
import { UpdateApplyDto } from './dto/update-apply.dto';

@Controller('applys')
export class ApplysController {
  constructor(private readonly applysService: ApplysService) {}

  @Post()
  create(@Body() createApplyDto: CreateApplyDto) {
    return this.applysService.create(createApplyDto);
  }

  @Get()
  findAll(@Query() query) {
    // 특정 바이어가 예약받은 목록 with seller 정보
    if (query.buyerId) {
      return this.applysService.findByBuyer(+query.buyerId);
    } else if (query.sellerId) {
      // 특정 셀러의 예약한 목록(기록)
      return this.applysService.findBySeller(+query.sellerId);
    }

    return this.applysService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.applysService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateApplyDto: UpdateApplyDto) {
    return this.applysService.update(+id, updateApplyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.applysService.remove(+id);
  }
}
