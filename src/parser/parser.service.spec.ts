import { Test, TestingModule } from '@nestjs/testing';
import { ParserService } from './parser.service';
import {default as fetch} from 'node-fetch';
import { async } from 'rxjs';

describe('ParserService', () => {
  let service: ParserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ParserService],
    }).compile();

    service = module.get<ParserService>(ParserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('return html text', async () => {
    const data = fetch('https://www.aldi-sued.de/de/angebote/aldi-preis-preis-baby/')
    .then(res => res.text())
    .then(body=>body)
      .catch(err => console.log(err))

    const htmlText: any = await Promise.all([data])

    console.log(service.parse(htmlText).title[0])
    
  });


});
