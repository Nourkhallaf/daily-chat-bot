import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SchedulerModule } from './modules/scheduler/scheduler.module';
import { RoadmapModule } from './modules/roadmap/roadmap.module';
import { TelegramModule } from './modules/telegram/telegram.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    SchedulerModule,
    RoadmapModule,
    TelegramModule,
  ],
})
export class AppModule {}
