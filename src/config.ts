import { ConfigModule } from "@nestjs/config";

import { FutureController } from "@app/future/future.controller";
import { BotController } from "@app/bot/bot.controller";

import { FutureService } from "@app/future/future.service";
import { BotService } from "@app/bot/bot.service";

export const appModules = {
    imports: [
        ConfigModule.forRoot({
            envFilePath: ['.env.dev', '.env.prod'],
            isGlobal: true
        })
    ],
    controllers: [
        FutureController, BotController
    ],
    providers: [
        FutureService, BotService
    ]
}