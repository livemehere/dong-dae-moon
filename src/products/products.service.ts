import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Buyer } from '../buyers/entities/buyer.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,

    @InjectRepository(Buyer)
    private buyerRepository: Repository<Buyer>,
  ) {}

  async create(createProductDto: CreateProductDto) {
    const buyer = await this.buyerRepository.findOneBy({
      id: createProductDto.buyer_id,
    });
    if (!buyer) throw new NotFoundException('바이어가 존재하지 않습니다');

    try {
      const newProduct = new Product();
      newProduct.buyer = buyer;
      newProduct.description = createProductDto.description;
      newProduct.tags = createProductDto.tags;

      return await this.productRepository.save(newProduct);
    } catch (e) {
      throw new BadRequestException(e.driverError.sqlMessage || e);
    }
  }

  findAll() {
    return this.productRepository.find({
      relations: ['buyer', 'images', 'schedules'],
    });
  }

  findOne(id: number) {
    return this.productRepository.findOne({
      where: {
        id,
      },
      relations: ['buyer', 'images', 'schedules'],
    });
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    try {
      return await this.productRepository.update(id, updateProductDto);
    } catch (e) {
      return e.driverError?.sqlMessage || e;
    }
  }

  remove(id: number) {
    return this.productRepository.delete(id);
  }
}
