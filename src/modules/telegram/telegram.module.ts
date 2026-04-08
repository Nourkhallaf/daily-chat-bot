import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TelegramService } from './telegram.service';
import { UserService } from './user.service';
import { TelegramUpdateService } from './telegram-update.service';
import { TelegramPollingService } from './telegram-polling.service';
import { TelegramWebhookService } from './telegram-webhook.service';
import { TelegramController } from './telegram.controller';
import { RoadmapModule } from '../roadmap/roadmap.module';

@Module({
  imports: [ConfigModule, RoadmapModule],
  controllers: [TelegramController],
  providers: [
    TelegramService,
    UserService,
    TelegramUpdateService,
    TelegramPollingService,
    TelegramWebhookService,
  ],
  exports: [TelegramService, UserService],
})
export class TelegramModule {}
