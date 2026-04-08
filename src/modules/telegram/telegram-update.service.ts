import { Injectable, Logger } from '@nestjs/common';
import { TelegramService } from './telegram.service';
import { UserService } from './user.service';
import { RoadmapService } from '../roadmap/roadmap.service';
import { TelegramUpdate } from '../../interfaces/telegram.interface';

@Injectable()
export class TelegramUpdateService {
  private readonly logger = new Logger(TelegramUpdateService.name);
  private lastUpdateId: number = 0;

  constructor(
    private readonly telegramService: TelegramService,
    private readonly userService: UserService,
    private readonly roadmapService: RoadmapService,
  ) {}

  async fetchUpdates(): Promise<void> {
    try {
      const updates = await this.telegramService.getUpdates(this.lastUpdateId);

      if (updates && updates.length > 0) {
        for (const update of updates) {
          await this.processUpdate(update);
          this.lastUpdateId = update.update_id + 1;
        }
      }
    } catch (error) {
      this.logger.error('Error fetching updates', error.message);
    }
  }

  private async processUpdate(update: TelegramUpdate): Promise<void> {
    if (!update.message || !update.message.text) {
      return;
    }

    const chatId = update.message.chat.id;
    const text = update.message.text.trim();
    const from = update.message.from;

    this.logger.log(`Received message from ${chatId}: ${text}`);

    if (text === '/start') {
      await this.handleStartCommand(
        chatId,
        from?.username,
        from?.first_name,
        from?.last_name,
      );
    } else if (text === '/stop') {
      await this.handleStopCommand(chatId);
    } else if (text === '/status') {
      await this.handleStatusCommand(chatId);
    }
  }

  private async handleStartCommand(
    chatId: number,
    username?: string,
    firstName?: string,
    lastName?: string,
  ): Promise<void> {
    const isNewUser = this.userService.addUser(
      chatId,
      username,
      firstName,
      lastName,
    );

    if (isNewUser) {
      const currentHour = new Date().getHours();
      const hasLessonBeenSent = currentHour >= 19; // 7 PM or later

      const welcomeMessage = `🚀 <b>Welcome ${firstName || 'there'}!</b>

You are now registered to receive daily fullstack development lessons.

📚 You'll learn:
• React, Node.js, NestJS
• PostgreSQL & Prisma
• Authentication & Security
• Next.js & SEO
• AI Integration

🎯 Build a complete job platform in 60 days!

${hasLessonBeenSent ? "📬 Since you joined after today's lesson time, I'm sending you today's lesson right now!" : 'Your first lesson will arrive at 7 PM Egypt time.'}

Commands:
/status - Check your registration
/stop - Unsubscribe`;

      await this.telegramService.sendMessageToChatId(chatId, welcomeMessage);
      this.logger.log(`Welcome message sent to new user: ${chatId}`);

      // Send current lesson immediately if registered after 7 PM
      if (hasLessonBeenSent) {
        await this.sendCurrentLesson(chatId);
      }
    } else {
      const alreadyRegisteredMessage = `✅ You're already registered!

You'll continue receiving daily lessons at 7 PM Egypt time.

Commands:
/status - Check your registration
/stop - Unsubscribe`;

      await this.telegramService.sendMessageToChatId(
        chatId,
        alreadyRegisteredMessage,
      );
    }
  }

  private async sendCurrentLesson(chatId: number): Promise<void> {
    try {
      const lesson = this.roadmapService.getTodayLesson();

      if (!lesson) {
        this.logger.warn('No lesson available to send');
        return;
      }

      const today = new Date().toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        timeZone: 'Africa/Cairo',
      });

      let message = `📅 <b>Day ${lesson.day} of 60</b> | ${today}

📚 <b>Topic:</b> ${lesson.title}

💡 <b>Explanation:</b>
${lesson.explanation}

🛠 <b>Task:</b> ${lesson.task}`;

      if (lesson.resource) {
        message += `

📖 <b>Resource:</b> ${lesson.resource.title}
🔗 ${lesson.resource.link}`;
      }

      await this.telegramService.sendMessageToChatId(chatId, message);
      this.logger.log(`Current lesson sent to new user: ${chatId}`);
    } catch (error) {
      this.logger.error('Failed to send current lesson', error.message);
    }
  }

  private async handleStopCommand(chatId: number): Promise<void> {
    const removed = this.userService.removeUser(chatId);

    if (removed) {
      const message = `👋 You've been unsubscribed.

You will no longer receive daily lessons.

Send /start anytime to subscribe again!`;

      await this.telegramService.sendMessageToChatId(chatId, message);
      this.logger.log(`User unsubscribed: ${chatId}`);
    } else {
      await this.telegramService.sendMessageToChatId(
        chatId,
        'You are not currently subscribed.',
      );
    }
  }

  private async handleStatusCommand(chatId: number): Promise<void> {
    const user = this.userService.getUser(chatId);

    if (user) {
      const lesson = this.roadmapService.getTodayLesson();
      const progress = this.roadmapService.getProgress();

      if (!lesson) {
        await this.telegramService.sendMessageToChatId(
          chatId,
          '❌ No lesson available',
        );
        return;
      }

      const today = new Date().toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        timeZone: 'Africa/Cairo',
      });

      let message = `📊 <b>Your Status</b>

✅ Registered: Yes
� Progress: Day ${progress.currentDay} of ${progress.totalDays} (${progress.percentage}%)
⏰ Daily lesson time: 7 PM Egypt time

━━━━━━━━━━━━━━━━━━━━

📅 <b>Day ${lesson.day} of 60</b> | ${today}

📚 <b>Topic:</b> ${lesson.title}

💡 <b>Explanation:</b>
${lesson.explanation}

🛠 <b>Task:</b> ${lesson.task}`;

      if (lesson.resource) {
        message += `

📖 <b>Resource:</b> ${lesson.resource.title}
🔗 ${lesson.resource.link}`;
      }

      await this.telegramService.sendMessageToChatId(chatId, message);
    } else {
      await this.telegramService.sendMessageToChatId(
        chatId,
        '❌ You are not registered. Send /start to subscribe!',
      );
    }
  }
}
