import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { RoadmapService } from '../roadmap/roadmap.service';
import { TelegramService } from '../telegram/telegram.service';
import { UserService } from '../telegram/user.service';

@Injectable()
export class SchedulerService {
  private readonly logger = new Logger(SchedulerService.name);

  constructor(
    private readonly roadmapService: RoadmapService,
    private readonly telegramService: TelegramService,
    private readonly userService: UserService,
  ) {}

  @Cron('0 19 * * *', {
    timeZone: 'Africa/Cairo',
  })
  async sendDailyLesson(): Promise<void> {
    this.logger.log('Starting daily lesson delivery...');

    try {
      const lesson = this.roadmapService.getTodayLesson();

      if (!lesson) {
        this.logger.warn('No lesson found for today');
        return;
      }

      const chatIds = this.userService.getAllChatIds();

      if (chatIds.length === 0) {
        this.logger.warn('No registered users to send lesson to');
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

      await this.telegramService.sendToAllUsers(chatIds, message);

      this.roadmapService.incrementDay();

      const progress = this.roadmapService.getProgress();
      this.logger.log(
        `Lesson sent to ${chatIds.length} users. Progress: ${progress.currentDay}/${progress.totalDays} (${progress.percentage}%)`,
      );
    } catch (error) {
      this.logger.error('Failed to send daily lesson', error.message);
    }
  }

  async sendTestMessage(): Promise<void> {
    this.logger.log('Sending test message...');
    await this.sendDailyLesson();
  }
}
