import { ProductRepository } from './products.repository';
import { Product } from './products.entity';
import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Product, ProductRepository])],
  controllers: [ProductsController]
})
export class ProductsModule {}
