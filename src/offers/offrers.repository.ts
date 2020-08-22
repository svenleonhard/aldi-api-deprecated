import { OfferDto } from './interfaces/offers.dto';
import { EntityRepository, Repository } from "typeorm";
import { Offer } from "./offers.entity";

@EntityRepository(Offer)
export class OfferRepository extends Repository<Offer> {
  createOffer:any = async (offerDto: OfferDto) => {
    return await this.save(offerDto);
  };
}