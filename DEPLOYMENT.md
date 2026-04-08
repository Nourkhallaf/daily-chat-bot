# 🚀 Deployment Guide - Railway

This guide will help you deploy your Telegram Learning Bot to Railway.

## 📋 Prerequisites

1. **GitHub Account** - Your code should be in a GitHub repository
2. **Railway Account** - Sign up at [railway.app](https://railway.app)
3. **Telegram Bot Token** - From @BotFather

## 🛠️ Deployment Steps

### 1. Prepare Your Repository

Make sure your code is pushed to GitHub:

```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

### 2. Deploy to Railway

1. Go to [railway.app](https://railway.app) and sign in with GitHub
2. Click **"New Project"**
3. Select **"Deploy from GitHub repo"**
4. Choose your `daily-chat-bot` repository
5. Railway will automatically detect it's a Node.js app

### 3. Configure Environment Variables

In Railway dashboard, go to **Variables** tab and add:

```
TELEGRAM_BOT_TOKEN=your_actual_bot_token_here
PORT=3000
```

**Important:** Replace `your_actual_bot_token_here` with your real bot token from @BotFather.

### 4. Deploy Settings

Railway will automatically:
- Install dependencies (`npm install`)
- Build the project (`npm run build`)
- Start the app (`npm run start:prod`)

### 5. Start Polling After Deployment

Once deployed, you need to start the polling. Get your Railway app URL (e.g., `https://your-app.railway.app`) and run:

```bash
# Delete any existing webhook
curl -X POST https://your-app.railway.app/telegram/webhook/delete

# Start polling
curl -X POST https://your-app.railway.app/telegram/polling/start
```

Or use the reset script endpoint:
```bash
# All-in-one reset
curl -X POST https://your-app.railway.app/telegram/webhook/delete
sleep 2
curl -X POST https://your-app.railway.app/telegram/polling/start
```

## ✅ Verify Deployment

1. Check Railway logs to ensure the app started successfully
2. Send `/start` to your Telegram bot
3. Send `/status` to verify it's working
4. Check that you receive the lesson with resource links

## 📊 Monitor Your Bot

- **Railway Dashboard**: View logs, metrics, and deployments
- **Telegram Bot**: Send `/status` to check current day and progress
- **API Endpoints**:
  - `GET /telegram/polling/status` - Check polling status
  - `GET /scheduler/progress` - Check roadmap progress
  - `GET /telegram/users/count` - Check subscriber count

## 🔄 Auto-Deploy

Railway automatically redeploys when you push to your main branch:

```bash
git add .
git commit -m "Update roadmap content"
git push origin main
```

## ⚙️ Important Notes

### Polling vs Webhook

This bot uses **polling** (checking for updates every second). For production, you might want to switch to **webhooks** for better performance:

1. Set up a webhook URL in Railway
2. Configure Telegram to send updates to your webhook
3. Remove polling logic

### Daily Lesson Schedule

The bot sends lessons at **7 PM Egypt time (Africa/Cairo)** daily. This is configured in:
- `src/modules/scheduler/scheduler.service.ts` - Cron job: `'0 19 * * *'`

### Restart Polling After Deployment

**Important:** After each deployment, polling stops. You must restart it:

```bash
curl -X POST https://your-app.railway.app/telegram/polling/start
```

Consider adding a startup script or using webhooks instead.

## 🐛 Troubleshooting

### Bot Not Responding

1. Check Railway logs for errors
2. Verify environment variables are set correctly
3. Ensure polling is started:
   ```bash
   curl https://your-app.railway.app/telegram/polling/status
   ```
4. If `isPolling: false`, start it:
   ```bash
   curl -X POST https://your-app.railway.app/telegram/polling/start
   ```

### Duplicate Messages

If you see duplicate messages, multiple polling instances are running:

1. Stop all polling:
   ```bash
   curl -X POST https://your-app.railway.app/telegram/polling/stop
   ```
2. Delete webhook:
   ```bash
   curl -X POST https://your-app.railway.app/telegram/webhook/delete
   ```
3. Wait 2 seconds, then start polling once:
   ```bash
   curl -X POST https://your-app.railway.app/telegram/polling/start
   ```

### 409 Conflict Error

This means Telegram has an active webhook or another polling instance:

```bash
# Run the reset sequence
curl -X POST https://your-app.railway.app/telegram/webhook/delete
sleep 2
curl -X POST https://your-app.railway.app/telegram/polling/start
```

## 🎯 Production Checklist

- [ ] Environment variables configured in Railway
- [ ] Code pushed to GitHub
- [ ] Railway deployment successful
- [ ] Polling started after deployment
- [ ] Bot responds to `/start` command
- [ ] Bot responds to `/status` with lesson + resource link
- [ ] Daily lessons scheduled for 7 PM Egypt time
- [ ] Logs show no errors

## 📱 Test Commands

After deployment, test these in Telegram:

```
/start   - Register for daily lessons
/status  - View current lesson and progress
/stop    - Unsubscribe from lessons
```

## 🔗 Useful Links

- [Railway Dashboard](https://railway.app/dashboard)
- [Railway Docs](https://docs.railway.app)
- [Telegram Bot API](https://core.telegram.org/bots/api)

---

**Need help?** Check Railway logs or Telegram bot responses for error messages.
