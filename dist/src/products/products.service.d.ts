import { Buyer } from 'src/buyers/entities/buyer.entity';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
export declare class ProductsService {
    private productRepository;
    private buyerRepository;
    constructor(productRepository: Repository<Product>, buyerRepository: Repository<Buyer>);
    create(createProductDto: CreateProductDto): Promise<Product>;
    findAll(): Promise<Product[]>;
    findOne(id: number): Promise<Product>;
    update(id: number, updateProductDto: UpdateProductDto): Promise<any>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
