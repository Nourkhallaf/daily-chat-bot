# Quick Setup Guide

## 1. Install Dependencies
```bash
npm install
```

## 2. Get Telegram Credentials

### Get Bot Token:
1. Open Telegram, search for `@BotFather`
2. Send `/newbot`
3. Follow instructions, copy the token

### Get Chat ID:
1. Search for `@userinfobot` in Telegram
2. Start chat, it will send your chat ID

## 3. Configure Environment
```bash
cp .env.example .env
```

Edit `.env`:
```
TELEGRAM_BOT_TOKEN=123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew11
TELEGRAM_CHAT_ID=123456789
PORT=3000
```

## 4. Run the Bot
```bash
npm run start:dev
```

## 5. Test Immediately (Optional)

Send POST request to trigger a test message:
```bash
curl -X POST http://localhost:3000/scheduler/send-now
```

Or check progress:
```bash
curl http://localhost:3000/scheduler/progress
```

## Available Endpoints

- `POST /scheduler/send-now` - Send current day's lesson immediately
- `GET /scheduler/progress` - Check current progress
- `POST /scheduler/reset` - Reset to Day 1
- `POST /scheduler/set-day/:day` - Jump to specific day

## Daily Schedule

Messages automatically sent at **9:00 AM** (Africa/Cairo timezone) every day.

To change timezone, edit `src/modules/scheduler/scheduler.service.ts`:
```typescript
@Cron('0 9 * * *', {
  timeZone: 'Your/Timezone',  // e.g., 'America/New_York'
})
```
