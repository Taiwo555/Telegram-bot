const TelegramBot = require('node-telegram-bot-api');

const token = '6325884276:AAFw9iT_XxQsLhPXEJz7VJPNRwUFQsWhNDU'; 
const bot = new TelegramBot(token, { polling: true });

bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const messageText = msg.text;
  
    if (messageText === '/start') {
        bot.sendMessage(chatId, 'Welcome to the bot!');
      }
  });
