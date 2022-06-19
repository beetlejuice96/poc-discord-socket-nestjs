import { Test, TestingModule } from '@nestjs/testing';
import { BotConfigService } from './bot-config.service';

describe('BotConfigService', () => {
  let service: BotConfigService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BotConfigService],
    }).compile();

    service = module.get<BotConfigService>(BotConfigService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
