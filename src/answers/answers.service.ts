import { BuyersService } from './../buyers/buyers.service';
import { Admin } from './../admin/entities/admin.entity';
import { Question } from './../questions/entities/question.entity';
import { AdminService } from './../admin/admin.service';
import { Answer } from './entities/answer.entity';
import { QuestionsService } from './../questions/questions.service';
import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { CreateAnswerDto } from './dto/create-answer.dto';
import { UpdateAnswerDto } from './dto/update-answer.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AnswersService {
  constructor(
    @InjectRepository(Answer)
    private answerRepository: Repository<Answer>,

    @InjectRepository(Question)
    private questionRepository: Repository<Question>,

    @Inject(BuyersService)
    private buyerService: BuyersService,
  ) {}

  async create(createAnswerDto: CreateAnswerDto) {
    const buyer = await this.buyerService.findOne(createAnswerDto.buyer_id);
    const question = await this.questionRepository.findOne({
      where: { id: createAnswerDto.question_id },
      relations: ['answer'],
    });

    if (!buyer) throw new BadRequestException('this buyer is not exists');
    if (!question) throw new BadRequestException('this question is not exists');
    if (question.answer)
      throw new BadRequestException('this answer is already exists');

    const newAnswer = new Answer();
    newAnswer.buyer = buyer;
    newAnswer.title = createAnswerDto.title;
    newAnswer.content = createAnswerDto.content;
    newAnswer.questionId = question.id;

    question.answer = newAnswer;

    return this.questionRepository.save(question);
  }

  findAll() {
    return this.answerRepository.find();
  }

  findOne(id: number) {
    return this.answerRepository.find({
      where: {
        id,
      },
    });
  }

  update(id: number, updateAnswerDto: UpdateAnswerDto) {
    return this.answerRepository.update(id, updateAnswerDto);
  }

  remove(id: number) {
    return this.answerRepository.delete(id);
  }
}
