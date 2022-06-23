import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
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
  findAll() {
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
