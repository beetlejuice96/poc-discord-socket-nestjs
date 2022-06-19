import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
  return {
    discordToken: process.env.DISCORD_TOKEN,
  };
});
