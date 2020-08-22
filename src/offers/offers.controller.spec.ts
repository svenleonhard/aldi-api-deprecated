import { OfferRepository } from './offrers.repository';
import { Test, TestingModule } from '@nestjs/testing';
import { OffersController } from './offers.controller';

describe('Offers Controller', () => {
  let controller: OffersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OffersController],
      providers: [OfferRepository],
    }).compile();

    controller = module.get<OffersController>(OffersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
