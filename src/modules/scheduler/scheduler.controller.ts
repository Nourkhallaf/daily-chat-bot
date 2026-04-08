import { Controller, Post, Get } from '@nestjs/common';
import { SchedulerService } from './scheduler.service';
import { RoadmapService } from '../roadmap/roadmap.service';

@Controller('scheduler')
export class SchedulerController {
  constructor(
    private readonly schedulerService: SchedulerService,
    private readonly roadmapService: RoadmapService,
  ) {}

  @Post('send-now')
  async sendNow(): Promise<{ message: string; day: number }> {
    await this.schedulerService.sendTestMessage();
    return {
      message: 'Lesson sent successfully',
      day: this.roadmapService.getCurrentDay(),
    };
  }

  @Get('progress')
  getProgress() {
    return this.roadmapService.getProgress();
  }

  @Post('reset')
  resetProgress(): { message: string } {
    this.roadmapService.resetProgress();
    return { message: 'Progress reset to Day 1' };
  }

  @Post('set-day/:day')
  setDay(day: number): { message: string; currentDay: number } {
    this.roadmapService.setDay(day);
    return {
      message: `Day set to ${day}`,
      currentDay: this.roadmapService.getCurrentDay(),
    };
  }
}
