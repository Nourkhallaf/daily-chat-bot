#!/bin/bash

echo "🔧 Resetting Telegram Bot..."

# Stop polling
echo "1. Stopping polling..."
curl -X POST http://localhost:3000/telegram/polling/stop 2>/dev/null

# Delete webhook and clear pending updates
echo -e "\n2. Deleting webhook..."
curl -X POST http://localhost:3000/telegram/webhook/delete 2>/dev/null

# Wait a moment
echo -e "\n3. Waiting 2 seconds..."
sleep 2

# Start polling
echo -e "\n4. Starting polling..."
curl -X POST http://localhost:3000/telegram/polling/start 2>/dev/null

echo -e "\n\n✅ Bot reset complete!"
echo "Check status: curl http://localhost:3000/telegram/polling/status"
