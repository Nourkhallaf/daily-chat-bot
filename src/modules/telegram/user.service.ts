import { Injectable, Logger } from '@nestjs/common';
import { TelegramUser } from '../../interfaces/user.interface';

@Injectable()
export class UserService {
  private readonly logger = new Logger(UserService.name);
  private users: Map<number, TelegramUser> = new Map();

  addUser(
    chatId: number,
    username?: string,
    firstName?: string,
    lastName?: string,
  ): boolean {
    if (this.users.has(chatId)) {
      this.logger.log(`User ${chatId} already registered`);
      return false;
    }

    const user: TelegramUser = {
      chatId,
      username,
      firstName,
      lastName,
      registeredAt: new Date(),
    };

    this.users.set(chatId, user);
    this.logger.log(
      `New user registered: ${chatId} (${firstName || 'Unknown'})`,
    );
    return true;
  }

  removeUser(chatId: number): boolean {
    const deleted = this.users.delete(chatId);
    if (deleted) {
      this.logger.log(`User ${chatId} removed`);
    }
    return deleted;
  }

  getUser(chatId: number): TelegramUser | undefined {
    return this.users.get(chatId);
  }

  getAllUsers(): TelegramUser[] {
    return Array.from(this.users.values());
  }

  getAllChatIds(): number[] {
    return Array.from(this.users.keys());
  }

  getUserCount(): number {
    return this.users.size;
  }

  isUserRegistered(chatId: number): boolean {
    return this.users.has(chatId);
  }

  clearAllUsers(): void {
    this.users.clear();
    this.logger.warn('All users cleared');
  }
}
