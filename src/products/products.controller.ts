import { ProductRepository } from './products.repository';
import { Controller, Get, Body, Post, Put, Delete, Param } from '@nestjs/common';
import { ProductsDto } from './interfaces/products.dto';
import { InjectRepository } from '@nestjs/typeorm';

@Controller('products')
export class ProductsController {
    constructor(
        @InjectRepository(ProductRepository) private readonly channelRepository: ProductRepository,
      ) {}

    @Get()
    getProducts() {
        return 'we get all Products'
    }

    @Post()
    create(@Body() productsDto: ProductsDto) {
        return this.channelRepository.createProduct(productsDto)
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return `we get the channel with the id ${id}`;
    }

    @Put(':id')
    update(@Param('id') id: string) {
        return `we update the channel with the id ${id}`;
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return `we delete the channel with the id ${id}`;
    }
}
