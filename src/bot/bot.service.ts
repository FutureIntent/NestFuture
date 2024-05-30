import { Injectable, OnModuleInit } from '@nestjs/common';
import TelegramBot from 'node-telegram-bot-api';

@Injectable()
export class BotService implements OnModuleInit {

  onModuleInit() {
    this.initialise()
  }

  initialise() {
    const token = 'YOUR_TELEGRAM_BOT_TOKEN';
    const bot = new TelegramBot(token, { polling: true });

    
  }
}
