import { Buyer } from './../buyers/entities/buyer.entity';
import { Answer } from './../answers/entities/answer.entity';
import { Seller } from './../sellers/entities/seller.entity';
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

    @InjectRepository(Buyer)
    private buyerRepository: Repository<Buyer>,

    @InjectRepository(Seller)
    private sellerRepository: Repository<Seller>,

    @InjectRepository(Answer)
    private answerRepository: Repository<Answer>,
  ) {}

  async create(createQuestionDto: CreateQuestionDto) {
    const buyer = await this.buyerRepository.findOneBy({
      id: createQuestionDto.buyer_id,
    });

    if (!buyer) {
      throw new BadRequestException(
        `buyer(${createQuestionDto.buyer_id}) is not exists`,
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
      newQuestion.buyer = buyer;
      newQuestion.seller = seller;
      return this.questionRepository.save(newQuestion);
    } catch (e) {
      return e;
    }
  }

  findAll() {
    return this.questionRepository.find({
      relations: ['buyer', 'seller', 'answer'],
    });
  }

  findOne(id: number) {
    return this.questionRepository.findOne({
      where: {
        id,
      },
      relations: ['buyer', 'seller', 'answer'],
    });
  }

  findByBuyerId(buyerId: number) {
    return this.questionRepository.find({
      where: {
        buyer: {
          id: buyerId,
        },
      },
      relations: ['buyer', 'seller', 'answer'],
    });
  }

  findBySellerId(sellerId: number) {
    return this.questionRepository.find({
      where: {
        seller: {
          id: sellerId,
        },
      },
      relations: ['buyer', 'seller', 'answer'],
    });
  }

  update(id: number, updateQuestionDto: UpdateQuestionDto) {
    return this.questionRepository.update(id, updateQuestionDto);
  }

  async remove(id: number) {
    const result = await this.questionRepository.delete(id);
    await this.answerRepository.delete({
      questionId: id,
    });

    return result;
  }
}
