# Telegram Learning Bot - Fullstack Roadmap

A NestJS-based Telegram bot that sends daily learning reminders based on a structured 60-day fullstack development roadmap.

## 🎯 Features

- **Automatic User Registration**: Users send `/start` to auto-register - no manual chat ID needed
- **Daily Automated Messages**: Sends lessons every day at 7 PM (Egypt time)
- **Smart Late Registration**: Users who join after 7 PM get today's lesson immediately
- **60-Day Engaging Roadmap**: Job platform focused with emojis, challenges, and bonus tasks
- **Progress Tracking**: Automatically tracks your learning progress
- **User Management**: `/stop` to unsubscribe, `/status` to check registration
- **Broadcast System**: Send custom messages to all registered users
- **Clean Architecture**: Modular NestJS structure with separation of concerns

## 📋 Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Telegram Bot Token

## 🚀 Setup Instructions

### 1. Get Telegram Bot Token

1. Open Telegram and search for `@BotFather`
2. Send `/newbot` command
3. Follow instructions to create your bot
4. Copy the bot token provided

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory:

```bash
cp .env.example .env
```

Edit `.env` and add your bot token:

```env
TELEGRAM_BOT_TOKEN=your_bot_token_here
PORT=3000
```

### 4. Run the Application

**Development mode:**
```bash
npm run start:dev
```

**Production mode:**
```bash
npm run build
npm run start:prod
```

## 📁 Project Structure

```
src/
├── modules/
│   ├── roadmap/
│   │   ├── roadmap.data.ts              # 60 days of engaging content
│   │   ├── roadmap.service.ts           # Progress tracking logic
│   │   └── roadmap.module.ts
│   ├── telegram/
│   │   ├── telegram.service.ts          # Telegram API integration
│   │   ├── user.service.ts              # User registration & storage
│   │   ├── telegram-update.service.ts   # Handle /start, /stop commands
│   │   ├── telegram-polling.service.ts  # Poll for updates
│   │   ├── telegram-webhook.service.ts  # Webhook management
│   │   ├── telegram.controller.ts       # API endpoints
│   │   └── telegram.module.ts
│   └── scheduler/
│       ├── scheduler.service.ts         # Cron job for daily messages
│       ├── scheduler.controller.ts      # Test endpoints
│       └── scheduler.module.ts
├── app.module.ts                        # Main app module
└── main.ts                              # Bootstrap file
scripts/
└── reset-bot.sh                         # Quick reset script
```

## 🛠 Usage

### 5. Start Polling (After App Starts)

After the app starts, you need to enable polling to receive user messages:

```bash
# Delete any existing webhook
curl -X POST http://localhost:3000/telegram/webhook/delete

# Start polling
curl -X POST http://localhost:3000/telegram/polling/start
```

Or use the reset script:
```bash
./scripts/reset-bot.sh
```

### 6. Register Users

Users can now register by:
1. Opening your bot in Telegram
2. Sending `/start`
3. They'll be auto-registered and receive a welcome message

**If they join after 7 PM**, they'll get today's lesson immediately!

### Available Commands for Users

- `/start` - Register and get welcome message
- `/stop` - Unsubscribe from daily lessons
- `/status` - Check registration status

### Admin API Endpoints

```bash
# View all registered users
curl http://localhost:3000/telegram/users

# Get user count
curl http://localhost:3000/telegram/users/count

# Broadcast custom message to all users
curl -X POST http://localhost:3000/telegram/broadcast \
  -H "Content-Type: application/json" \
  -d '{"message": "Special announcement!"}'

# Send test lesson to all users
curl -X POST http://localhost:3000/scheduler/send-now

# Check progress
curl http://localhost:3000/scheduler/progress

# Reset to Day 1
curl -X POST http://localhost:3000/scheduler/reset

# Set specific day
curl -X POST http://localhost:3000/scheduler/set-day/5

# Polling controls
curl -X POST http://localhost:3000/telegram/polling/start
curl -X POST http://localhost:3000/telegram/polling/stop
curl http://localhost:3000/telegram/polling/status
```

### Schedule Configuration

The bot sends messages daily at **7:00 PM** (Africa/Cairo timezone). To change this:

Edit `src/modules/scheduler/scheduler.service.ts`:

```typescript
@Cron('0 19 * * *', {  // 19 = 7 PM
  timeZone: 'Africa/Cairo',
})
```

## 📚 Roadmap Content

The 60-day roadmap covers building a **real job platform**:

- **Week 1-3 (Days 1-21)**: React - Frontend with emojis & challenges
- **Week 4 (Days 22-28)**: Node.js - Backend foundation
- **Week 5-6 (Days 29-49)**: NestJS + PostgreSQL + Auth - Production backend
- **Week 7 (Days 50-56)**: Next.js - Modern SSR frontend
- **Week 8 (Days 57-60)**: AI Integration - OpenAI-powered features

Each day includes:
- 🎯 Engaging title with emoji
- 💡 Story-based explanation
- ⚡ Challenge-based task
- 🎁 Bonus tasks for extra learning

## 🔧 Extending the Bot

### Add OpenAI Integration (Optional)

1. Install OpenAI SDK:
```bash
npm install openai
```

2. Add to `.env`:
```env
OPENAI_API_KEY=your_openai_key
```

3. Create AI service to generate dynamic explanations

### Add Database Persistence

1. Install Prisma:
```bash
npm install @prisma/client
npm install -D prisma
```

2. Initialize Prisma:
```bash
npx prisma init
```

3. Update `roadmap.service.ts` to save/load progress from database

## 📝 Message Format

Each daily message includes:

```
📅 Day X

📚 Topic: Topic Name

💡 Explanation:
Short explanation (2-3 lines)

🛠 Task: Practical actionable task
```

## 🐛 Troubleshooting

**409 Conflict Error:**
- Stop the app and restart it
- Run `./scripts/reset-bot.sh` to clear webhook and restart polling
- Make sure only one instance is running

**Bot not receiving /start commands:**
- Check polling is active: `curl http://localhost:3000/telegram/polling/status`
- Start polling: `curl -X POST http://localhost:3000/telegram/polling/start`
- Check logs for errors

**No users registered:**
- Users must send `/start` to your bot in Telegram
- Check `curl http://localhost:3000/telegram/users` to see registered users

**Daily messages not sending:**
- Ensure app is running at 7 PM
- Check if users are registered
- Verify cron job is configured correctly

**TypeScript errors:**
- Run `npm install` to ensure all dependencies are installed
- Check `tsconfig.json` configuration

## 📄 License

MIT

## 🤝 Contributing

Feel free to extend this bot with additional features like:
- Database persistence
- Multiple users support
- Custom roadmaps
- Progress reports
- Quiz functionality
