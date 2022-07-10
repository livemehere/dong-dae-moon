import { CreateBusinessImageDto } from './dto/create-business-image.dto';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFiles,
  UploadedFile,
} from '@nestjs/common';
import { ImagesService } from './images.service';
import { CreateImageDto } from './dto/create-image.dto';
import { UpdateImageDto } from './dto/update-image.dto';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';

@Controller('images')
export class ImagesController {
  constructor(private readonly imagesService: ImagesService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(
    @UploadedFile() file,
    @Body() createImageDto: CreateImageDto,
  ) {
    return this.imagesService.upload(
      file,
      +createImageDto.id,
      createImageDto.description,
    );
  }

  @Post('business/:id')
  @UseInterceptors(FileInterceptor('file'))
  async uploadBusinessFile(
    @UploadedFile() file,
    @Body() createBusinessImageDto: CreateBusinessImageDto,
    @Param('id') id: string,
  ) {
    return this.imagesService.uploadBusiness(file, +id);
  }

  @Get()
  findAll() {
    return this.imagesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.imagesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateImageDto: UpdateImageDto) {
    return this.imagesService.update(+id, updateImageDto);
  }

  @Delete()
  remove(@Param('key') key: string) {
    return this.imagesService.deleteObject(process.env.AWS_S3_BUCKET_NAME, key);
  }
}
