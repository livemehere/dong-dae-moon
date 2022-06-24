import { Admin } from './entities/admin.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { Repository } from 'typeorm';

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(Admin)
    private adminRepository: Repository<Admin>,
  ) {}
  async create(createAdminDto: CreateAdminDto) {
    try {
      const newAdmin = new Admin();
      newAdmin.email = createAdminDto.email;
      newAdmin.password = createAdminDto.password;
      return await this.adminRepository.save(newAdmin);
    } catch (e) {
      return e.sqlMessage || e;
    }
  }

  findAll() {
    return this.adminRepository.find();
  }

  findOne(id: number) {
    return this.adminRepository.findOneBy({ id });
  }

  update(id: number, updateAdminDto: UpdateAdminDto) {
    return this.adminRepository.update(id, updateAdminDto);
  }

  remove(id: number) {
    return this.adminRepository.delete(id);
  }
}
