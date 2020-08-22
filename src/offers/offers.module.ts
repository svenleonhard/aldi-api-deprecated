import { OfferRepository } from './offrers.repository';
import { Offer } from './offers.entity';
import { Module } from '@nestjs/common';
import { OffersController } from './offers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Offer, OfferRepository])],
  controllers: [OffersController]
})
export class OffersModule {}
