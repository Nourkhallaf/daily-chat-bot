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
      
      // Wait a moment before starting polling
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Start polling automatically
      this.pollingService.startPolling();
      this.logger.log('Polling started automatically');
    } catch (error) {
      this.logger.error('Failed to initialize Telegram bot', error.message);
    }
  }
}
