import { Injectable } from '@nestjs/common';
import {
  BitFieldResolvable,
  IntentsString,
  Intents,
  ClientOptions,
} from 'discord.js';

export class ClientOptionsConfig implements ClientOptions {
  readonly intents: BitFieldResolvable<IntentsString, number>;

  constructor() {
    this.intents = [
      Intents.FLAGS.GUILDS,
      Intents.FLAGS.GUILD_MESSAGES,
      Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
      Intents.FLAGS.DIRECT_MESSAGES,
      Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
    ];
  }
}
