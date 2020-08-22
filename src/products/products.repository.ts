import { ProductsDto } from './interfaces/products.dto';
import { Product } from "./products.entity";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(Product)
export class ProductRepository extends Repository<Product> {
  createProduct:any = async (productsDto: ProductsDto) => {
    return await this.save(productsDto);
  };
}