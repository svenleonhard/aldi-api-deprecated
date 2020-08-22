import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OffersModule } from './offers/offers.module';

@Module({
  imports: [  
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'example',
      database: 'aldi',
      entities: [__dirname + '/../**/*.entity.js'],
      synchronize: true,
    }),
    ProductsModule,
    OffersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
