import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { GameModule } from './game/game.module';
import { LeaderboardModule } from './leaderboard/leaderboard.module';

@Module({
  imports: [AuthModule, UserModule, GameModule, LeaderboardModule],
})
export class AppModule {}
