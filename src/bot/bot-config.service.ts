import { Inject, Injectable } from '@nestjs/common';
import {
  DiscordModuleOption,
  DiscordOptionsFactory,
} from '@discord-nestjs/core';
import { ConfigType } from '@nestjs/config';
import { ClientOptionsConfig } from './config/client-options.config';
import config from '../common/env.config';

@Injectable()
export class BotConfigService implements DiscordOptionsFactory {
  constructor(
    @Inject(config.KEY) private configService: ConfigType<typeof config>,
  ) {}

  createDiscordOptions(): DiscordModuleOption {
    const clientConfig = new ClientOptionsConfig();
    return {
      token: this.configService.discordToken,
      discordClientOptions: clientConfig,
    };
  }
}
