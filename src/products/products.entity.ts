import { Offer } from './../offers/offers.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";

@Entity()
export class Product {
   @PrimaryGeneratedColumn()
   id: number;

   @Column({length: 50})
   name: string;

   @Column()
   price: number;

   @Column({length: 50})
   amount: string;

   @Column({length: 256, nullable: true})
   url: string;

   @OneToMany(() => Offer, offer => offer.product)
   offers: Offer[];
}