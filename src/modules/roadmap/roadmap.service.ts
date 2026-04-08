import { Injectable } from '@nestjs/common';
import { RoadmapDay } from '../../interfaces/roadmap.interface';
import { ROADMAP_DATA } from './roadmap.data';

@Injectable()
export class RoadmapService {
  private currentDay: number = 1;

  getCurrentDay(): number {
    return this.currentDay;
  }

  getTodayLesson(): RoadmapDay | null {
    const lesson = ROADMAP_DATA.find((item) => item.day === this.currentDay);
    return lesson || null;
  }

  incrementDay(): void {
    if (this.currentDay < ROADMAP_DATA.length) {
      this.currentDay++;
    } else {
      this.currentDay = 1;
    }
  }

  resetProgress(): void {
    this.currentDay = 1;
  }

  setDay(day: number): void {
    if (day >= 1 && day <= ROADMAP_DATA.length) {
      this.currentDay = day;
    }
  }

  getTotalDays(): number {
    return ROADMAP_DATA.length;
  }

  getProgress(): { currentDay: number; totalDays: number; percentage: number } {
    return {
      currentDay: this.currentDay,
      totalDays: ROADMAP_DATA.length,
      percentage: Math.round((this.currentDay / ROADMAP_DATA.length) * 100),
    };
  }
}
