export interface TelegramUser {
  chatId: number;
  username?: string;
  firstName?: string;
  lastName?: string;
  registeredAt: Date;
}