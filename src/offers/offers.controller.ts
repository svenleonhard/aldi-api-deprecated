import { OfferRepository } from './offrers.repository';
import { Controller, Get, Body, Post, Put, Delete, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OfferDto } from './interfaces/offers.dto';

@Controller('offers')
export class OffersController {
    constructor(
        @InjectRepository(OfferRepository) private readonly offerRepository: OfferRepository,
      ) {}

    @Get()
    getOffers() {
        return 'we get all Offers'
    }

    @Post()
    create(@Body() offerDto: OfferDto) {
        return this.offerRepository.createOffer(offerDto)
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
