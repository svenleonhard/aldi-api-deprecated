import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Offer {
   @PrimaryGeneratedColumn()
   id: number;

   @Column()
   product: number;

   @Column()
   price: number;

   @Column()
   advantage: number;

   @Column({length:50})
   basePrice: string;

   @Column({nullable: true})
   startDate: Date;

   @Column({nullable: true})
   endDate: Date;
}