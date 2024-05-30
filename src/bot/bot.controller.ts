import { Controller, Get } from '@nestjs/common';
import { BotService } from '@app/bot/bot.service';

@Controller('bot')
export class BotController {
  constructor(private readonly botService: BotService) {}

 
}
