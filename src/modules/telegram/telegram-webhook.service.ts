import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';

@Injectable()
export class TelegramWebhookService {
  private readonly logger = new Logger(TelegramWebhookService.name);
  private readonly botToken: string;
  private readonly baseUrl: string;

  constructor(private configService: ConfigService) {
    this.botToken = this.configService.get<string>('TELEGRAM_BOT_TOKEN');
    this.baseUrl = `https://api.telegram.org/bot${this.botToken}`;
  }

  async deleteWebhook(): Promise<void> {
    try {
      const url = `${this.baseUrl}/deleteWebhook`;
      const response = await axios.post(url, {
        drop_pending_updates: true,
      });

      if (response.data.ok) {
        this.logger.log('Webhook deleted successfully');
      } else {
        this.logger.error('Failed to delete webhook', response.data);
      }
    } catch (error) {
      this.logger.error('Error deleting webhook', error.message);
    }
  }

  async getWebhookInfo(): Promise<any> {
    try {
      const url = `${this.baseUrl}/getWebhookInfo`;
      const response = await axios.get(url);

      if (response.data.ok) {
        return response.data.result;
      }

      return null;
    } catch (error) {
      this.logger.error('Error getting webhook info', error.message);
      return null;
    }
  }
}
