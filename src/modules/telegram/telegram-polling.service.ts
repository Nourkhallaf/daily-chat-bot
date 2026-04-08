import { Injectable, Logger, OnModuleDestroy } from '@nestjs/common';
import { TelegramUpdateService } from './telegram-update.service';

@Injectable()
export class TelegramPollingService implements OnModuleDestroy {
  private readonly logger = new Logger(TelegramPollingService.name);
  private pollingInterval: NodeJS.Timeout | null = null;
  private readonly POLLING_INTERVAL_MS = 1000; // 1 second - Telegram handles rate limiting
  private isPolling = false;

  constructor(private readonly updateService: TelegramUpdateService) {}

  startPolling(): void {
    if (this.isPolling && this.pollingInterval) {
      this.logger.warn('Polling already active');
      return;
    }

    // Clear any existing interval first
    this.stopPolling();

    this.logger.log('Starting Telegram polling...');

    this.pollingInterval = setInterval(async () => {
      await this.updateService.fetchUpdates();
    }, this.POLLING_INTERVAL_MS);

    this.isPolling = true;
    this.logger.log(
      `Polling active (every ${this.POLLING_INTERVAL_MS / 1000}s)`,
    );
  }

  stopPolling(): void {
    if (this.pollingInterval) {
      clearInterval(this.pollingInterval);
      this.pollingInterval = null;
      this.isPolling = false;
      this.logger.log('Polling stopped');
    }
  }

  onModuleDestroy() {
    this.stopPolling();
  }

  getStatus(): { isPolling: boolean; intervalMs: number } {
    return {
      isPolling: this.isPolling,
      intervalMs: this.POLLING_INTERVAL_MS,
    };
  }
}
