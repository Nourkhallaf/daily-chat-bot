import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';

@Injectable()
export class TelegramService {
  private readonly logger = new Logger(TelegramService.name);
  private readonly botToken: string;
  private readonly chatId: string;
  private readonly baseUrl: string;

  constructor(private configService: ConfigService) {
    this.botToken = this.configService.get<string>('TELEGRAM_BOT_TOKEN');
    this.chatId = this.configService.get<string>('TELEGRAM_CHAT_ID');
    this.baseUrl = `https://api.telegram.org/bot${this.botToken}`;
  }

  async sendMessage(message: string): Promise<void> {
    try {
      const url = `${this.baseUrl}/sendMessage`;
      const response = await axios.post(url, {
        chat_id: this.chatId,
        text: message,
        parse_mode: 'HTML',
      });

      if (response.data.ok) {
        this.logger.log('Message sent successfully to Telegram');
      } else {
        this.logger.error('Failed to send message', response.data);
      }
    } catch (error) {
      this.logger.error('Error sending Telegram message', error.message);
      throw error;
    }
  }

  async sendMessageToChatId(chatId: number, message: string): Promise<void> {
    try {
      const url = `${this.baseUrl}/sendMessage`;
      const response = await axios.post(url, {
        chat_id: chatId,
        text: message,
        parse_mode: 'HTML',
      });

      if (response.data.ok) {
        this.logger.log(`Message sent to chat ${chatId}`);
      } else {
        this.logger.error(`Failed to send message to ${chatId}`, response.data);
      }
    } catch (error) {
      this.logger.error(
        `Error sending message to ${chatId}`,
        error.message,
      );
    }
  }

  async sendToAllUsers(chatIds: number[], message: string): Promise<void> {
    this.logger.log(`Sending message to ${chatIds.length} users`);
    
    const promises = chatIds.map((chatId) =>
      this.sendMessageToChatId(chatId, message),
    );

    await Promise.allSettled(promises);
    this.logger.log('Broadcast complete');
  }

  async getUpdates(offset: number = 0): Promise<any[]> {
    try {
      const url = `${this.baseUrl}/getUpdates`;
      const response = await axios.post(
        url,
        {
          offset,
          timeout: 30,
          allowed_updates: ['message'],
        },
        {
          timeout: 35000, // 35 seconds axios timeout (slightly longer than Telegram's 30s)
        },
      );

      if (response.data.ok) {
        return response.data.result || [];
      }

      return [];
    } catch (error) {
      // Don't log 409 errors as they're expected when stopping/starting polling
      if (error.response?.status !== 409) {
        this.logger.error('Error fetching updates', error.message);
      }
      return [];
    }
  }

  async sendDailyLesson(
    day: number,
    title: string,
    explanation: string,
    task: string,
    resourceTitle?: string,
    resourceLink?: string,
  ): Promise<void> {
    const message = this.formatLessonMessage(day, title, explanation, task, resourceTitle, resourceLink);
    await this.sendMessage(message);
  }

  private formatLessonMessage(
    day: number,
    title: string,
    explanation: string,
    task: string,
    resourceTitle?: string,
    resourceLink?: string,
  ): string {
    const today = new Date().toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      timeZone: 'Africa/Cairo',
    });

    let message = `📅 <b>Day ${day} of 60</b> | ${today}

📚 <b>Topic:</b> ${title}

💡 <b>Explanation:</b>
${explanation}

🛠 <b>Task:</b> ${task}`;

    if (resourceTitle && resourceLink) {
      message += `

📖 <b>Resource:</b> ${resourceTitle}
🔗 ${resourceLink}`;
    }

    return message;
  }
}
