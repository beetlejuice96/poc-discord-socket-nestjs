import { Module } from '@nestjs/common';
import { BotService } from './bot.service';
import { BotConfigService } from './bot-config.service';
import { DiscordModule } from '@discord-nestjs/core';

@Module({
  imports: [
    DiscordModule.forRootAsync({
      useClass: BotConfigService,
    }),
  ],
  providers: [BotService, BotConfigService],
})
export class BotModule {}
