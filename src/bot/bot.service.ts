import { Injectable, Logger } from '@nestjs/common';
import { InjectDiscordClient, Once } from '@discord-nestjs/core';
import {
  Client,
  FetchGuildOptions,
  Guild,
  GuildListMembersOptions,
  GuildResolvable,
} from 'discord.js';

@Injectable()
export class BotService {
  private readonly logger = new Logger(BotService.name);

  constructor(
    @InjectDiscordClient()
    private readonly client: Client,
  ) {}

  @Once('ready')
  async onReady() {
    this.logger.log(`Bot ${this.client.user.tag} was started!`);
    // let guild: Guild;
    // guild.id = '916416894666420247';
    const guilds = this.client.guilds;
    // const allGuilds = guilds.fetch({ guild });
    const guildfinded: GuildResolvable = guilds.cache.find(
      (guild) => guild.id === '916416894666420247',
    );
    const guildFindedWithUsers = await guilds.fetch({
      guildfinded,
      withCounts: true,
    } as unknown as FetchGuildOptions);
    console.log(guildfinded);

    const membersManager = guildfinded.members;
    try {
      const membersActives = await membersManager.list({
        limit: 100,
        count: true,
      } as GuildListMembersOptions);
      console.log('members activos:', membersActives);
    } catch (error) {
      console.log(error);
    }

    // const users = this.client.users;
    // console.log(users.cache);
  }
}
