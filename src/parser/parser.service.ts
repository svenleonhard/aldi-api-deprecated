import { Injectable } from '@nestjs/common';
import { parse } from 'node-html-parser';

@Injectable()
export class ParserService {
    parse(offersPage:string): any {
        const parsedOffersPage = parse(offersPage);
        return {
            picture: parsedOffersPage.querySelectorAll('.box--image-container'),
            title:  parsedOffersPage.querySelectorAll('.box--description--header'),
        } 

    }
}
