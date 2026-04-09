import { Module, OnModuleInit, Logger } from '@nestjs/common';
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
export class TelegramModule implements OnModuleInit {
  private readonly logger = new Logger(TelegramModule.name);

  constructor(
    private readonly webhookService: TelegramWebhookService,
    private readonly pollingService: TelegramPollingService,
  ) {}

  async onModuleInit() {
    this.logger.log('Initializing Telegram bot...');
    
    try {
      // Delete any existing webhook to avoid conflicts
      await this.webhookService.deleteWebhook();
      this.logger.log('Webhook deleted');
      
      // NOTE: Auto-start polling disabled to prevent multiple instances on Railway
      // Start polling manually via: POST /telegram/polling/start
      this.logger.log('Telegram bot initialized. Start polling manually via API endpoint.');
    } catch (error) {
      this.logger.error('Failed to initialize Telegram bot', error.message);
    }
  }
}
