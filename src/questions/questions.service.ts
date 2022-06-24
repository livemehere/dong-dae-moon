import { Seller } from './../sellers/entities/seller.entity';
import { Product } from 'src/products/entities/product.entity';
import { Question } from './entities/question.entity';
import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { Repository } from 'typeorm';

@Injectable()
export class QuestionsService {
  constructor(
    @InjectRepository(Question)
    private questionRepository: Repository<Question>,

    @InjectRepository(Product)
    private productnRepository: Repository<Product>,

    @InjectRepository(Seller)
    private sellerRepository: Repository<Seller>,
  ) {}

  async create(createQuestionDto: CreateQuestionDto) {
    const product = await this.productnRepository.findOneBy({
      id: createQuestionDto.product_id,
    });

    if (!product) {
      throw new BadRequestException(
        `product(${createQuestionDto.product_id}) is not exists`,
      );
    }

    const seller = await this.sellerRepository.findOneBy({
      id: createQuestionDto.seller_id,
    });

    if (!seller) {
      throw new BadRequestException(
        `seller(${createQuestionDto.seller_id}) is not exists`,
      );
    }

    try {
      const newQuestion = new Question();
      newQuestion.title = createQuestionDto.title;
      newQuestion.content = createQuestionDto.content;
      newQuestion.product = product;
      newQuestion.seller = seller;
      return this.questionRepository.save(newQuestion);
    } catch (e) {
      return e;
    }
  }

  findAll() {
    return this.questionRepository.find({
      relations: ['product', 'seller'],
    });
  }

  findOne(id: number) {
    return this.questionRepository.findOne({
      where: {
        id,
      },
      relations: ['product', 'seller'],
    });
  }

  update(id: number, updateQuestionDto: UpdateQuestionDto) {
    return this.questionRepository.update(id, updateQuestionDto);
  }

  remove(id: number) {
    return this.questionRepository.delete(id);
  }
}
