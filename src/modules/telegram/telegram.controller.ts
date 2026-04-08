import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { TelegramService } from './telegram.service';
import { TelegramPollingService } from './telegram-polling.service';
import { TelegramWebhookService } from './telegram-webhook.service';

@Controller('telegram')
export class TelegramController {
  constructor(
    private readonly userService: UserService,
    private readonly telegramService: TelegramService,
    private readonly pollingService: TelegramPollingService,
    private readonly webhookService: TelegramWebhookService,
  ) {}

  @Get('users')
  getAllUsers() {
    return {
      users: this.userService.getAllUsers(),
      count: this.userService.getUserCount(),
    };
  }

  @Get('users/count')
  getUserCount() {
    return {
      count: this.userService.getUserCount(),
    };
  }

  @Post('broadcast')
  async broadcastMessage(@Body() body: { message: string }) {
    const chatIds = this.userService.getAllChatIds();
    
    if (chatIds.length === 0) {
      return {
        success: false,
        message: 'No registered users',
      };
    }

    await this.telegramService.sendToAllUsers(chatIds, body.message);

    return {
      success: true,
      message: `Broadcast sent to ${chatIds.length} users`,
    };
  }

  @Post('polling/start')
  startPolling() {
    this.pollingService.startPolling();
    return {
      success: true,
      message: 'Polling started',
    };
  }

  @Post('polling/stop')
  stopPolling() {
    this.pollingService.stopPolling();
    return {
      success: true,
      message: 'Polling stopped',
    };
  }

  @Get('polling/status')
  getPollingStatus() {
    return this.pollingService.getStatus();
  }

  @Post('webhook/delete')
  async deleteWebhook() {
    await this.webhookService.deleteWebhook();
    return {
      success: true,
      message: 'Webhook deleted and pending updates cleared',
    };
  }

  @Get('webhook/info')
  async getWebhookInfo() {
    const info = await this.webhookService.getWebhookInfo();
    return info;
  }
}
