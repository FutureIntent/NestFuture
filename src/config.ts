import { ConfigModule } from "@nestjs/config";

import { FutureController } from "@app/future/future.controller";

import { FutureService } from "@app/future/future.service";

export const appModules = {
    imports: [
        ConfigModule.forRoot({
            envFilePath: ['.env.dev', '.env.prod'],
            isGlobal: true
        })
    ],
    controllers: [
        FutureController
    ],
    providers: [
        FutureService
    ]
}