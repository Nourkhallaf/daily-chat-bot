# 🧪 Testing Guide

Complete guide to test your Telegram Learning Bot.

## ✅ Pre-Test Checklist

- [ ] Node.js installed
- [ ] Dependencies installed (`npm install`)
- [ ] `.env` file configured with `TELEGRAM_BOT_TOKEN`
- [ ] App is running (`npm run start:dev`)

## 🚀 Step-by-Step Testing

### 1. Start the Application

```bash
npm run start:dev
```

**Expected output:**
```
[Nest] LOG [NestApplication] Nest application successfully started
[Nest] LOG [Bootstrap] Application is running on: http://localhost:3000
[Nest] LOG [Bootstrap] Daily lesson scheduler is active (9 AM daily)
```

### 2. Initialize Polling

```bash
./scripts/reset-bot.sh
```

**Expected output:**
```
🔧 Resetting Telegram Bot...
1. Stopping polling...
{"success":true,"message":"Polling stopped"}
2. Deleting webhook...
{"success":true,"message":"Webhook deleted and pending updates cleared"}
3. Waiting 2 seconds...
4. Starting polling...
{"success":true,"message":"Polling started"}

✅ Bot reset complete!
```

**Verify polling is active:**
```bash
curl http://localhost:3000/telegram/polling/status
```

**Expected:**
```json
{"isPolling":true,"intervalMs":3000}
```

### 3. Test User Registration

**In Telegram:**
1. Open your bot
2. Send: `/start`

**Expected response:**
```
🚀 Welcome [Your Name]!

You are now registered to receive daily fullstack development lessons.

📚 You'll learn:
• React, Node.js, NestJS
• PostgreSQL & Prisma
• Authentication & Security
• Next.js & SEO
• AI Integration

🎯 Build a complete job platform in 60 days!

Your first lesson will arrive at 7 PM Egypt time.

Commands:
/status - Check your registration
/stop - Unsubscribe
```

**If you register after 7 PM**, you should also receive today's lesson immediately!

### 4. Verify User Registration

```bash
curl http://localhost:3000/telegram/users
```

**Expected:**
```json
{
  "users": [
    {
      "chatId": 728758798,
      "username": "your_username",
      "firstName": "Your Name",
      "registeredAt": "2026-04-08T17:00:00.000Z"
    }
  ],
  "count": 1
}
```

### 5. Test User Commands

**Send `/status` in Telegram:**

**Expected:**
```
📊 Your Status

✅ Registered: Yes
👤 Chat ID: 728758798
📅 Registered: 4/8/2026
⏰ Daily lesson time: 7 PM Egypt time

Total subscribers: 1
```

**Send `/stop` in Telegram:**

**Expected:**
```
👋 You've been unsubscribed.

You will no longer receive daily lessons.

Send /start anytime to subscribe again!
```

### 6. Test Manual Lesson Sending

```bash
curl -X POST http://localhost:3000/scheduler/send-now
```

**Expected in Telegram:**
```
📅 Day 1 of 60 | Tuesday, April 8, 2026

📚 Topic: 🎯 JSX - Your First Job Card

💡 Explanation:
Welcome to Day 1! Think of JSX as HTML's cooler cousin that lives in JavaScript...

🛠 Task: ⚡ Challenge: Build your first JobCard component showing "Software Engineer at Google". Bonus: Add a salary badge!
```

### 7. Test Progress Tracking

**Check current progress:**
```bash
curl http://localhost:3000/scheduler/progress
```

**Expected:**
```json
{
  "currentDay": 2,
  "totalDays": 60,
  "percentage": "3.33%",
  "nextLesson": {
    "day": 2,
    "title": "🧩 Components - Building Blocks"
  }
}
```

### 8. Test Progress Reset

```bash
curl -X POST http://localhost:3000/scheduler/reset
```

**Expected:**
```json
{"message":"Progress reset to Day 1"}
```

### 9. Test Setting Specific Day

```bash
curl -X POST http://localhost:3000/scheduler/set-day/10
```

**Expected:**
```json
{"message":"Current day set to 10"}
```

### 10. Test Broadcast Message

```bash
curl -X POST http://localhost:3000/telegram/broadcast \
  -H "Content-Type: application/json" \
  -d '{"message": "🎉 <b>Test Broadcast</b>\n\nThis is a custom message to all users!"}'
```

**Expected in Telegram:**
```
🎉 Test Broadcast

This is a custom message to all users!
```

### 11. Test Late Registration (After 7 PM)

**If current time is after 7 PM:**
1. Register a new user with `/start`
2. They should receive:
   - Welcome message with note about late registration
   - Today's lesson immediately

**Welcome message will say:**
```
📬 Since you joined after today's lesson time, I'm sending you today's lesson right now!
```

### 12. Test Automatic Daily Sending

**Wait until 7 PM Egypt time**, or temporarily change the cron schedule for testing:

Edit `src/modules/scheduler/scheduler.service.ts`:
```typescript
@Cron('*/2 * * * *', {  // Every 2 minutes for testing
  timeZone: 'Africa/Cairo',
})
```

Restart the app and wait 2 minutes. All registered users should receive the lesson.

## 🎯 Complete Test Checklist

- [ ] App starts without errors
- [ ] Polling starts successfully
- [ ] User can register with `/start`
- [ ] User appears in `/telegram/users`
- [ ] `/status` command works
- [ ] `/stop` command works
- [ ] Manual lesson sending works
- [ ] Progress tracking works
- [ ] Progress reset works
- [ ] Set day works
- [ ] Broadcast message works
- [ ] Late registration (after 7 PM) sends immediate lesson
- [ ] Daily automatic sending at 7 PM works

## 🐛 Common Issues

**Polling not starting:**
```bash
./scripts/reset-bot.sh
```

**409 errors:**
- Restart the app
- Run reset script
- Ensure only one instance is running

**No users registered:**
- Make sure polling is active
- Check bot token is correct
- Verify user sent `/start` to the bot

**Messages not received:**
- Check user is registered
- Verify bot token
- Check app logs for errors

## 📊 Monitoring

**Watch logs in real-time:**
```bash
npm run start:dev
```

**Check polling status:**
```bash
curl http://localhost:3000/telegram/polling/status
```

**Check user count:**
```bash
curl http://localhost:3000/telegram/users/count
```

## ✅ Success Criteria

Your bot is working correctly if:
1. ✅ Users can register with `/start`
2. ✅ Welcome message is sent
3. ✅ Late registrations get immediate lesson
4. ✅ All commands work (`/status`, `/stop`)
5. ✅ Manual lesson sending works
6. ✅ Progress tracking is accurate
7. ✅ Broadcast messages reach all users
8. ✅ Daily lessons send at 7 PM automatically

🎉 **Congratulations! Your bot is fully functional!**
