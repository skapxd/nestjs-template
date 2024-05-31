import { join } from 'node:path';

import { Module } from '@nestjs/common';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { ServeStaticModule } from '@nestjs/serve-static';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomMongooseModule } from './modules/mongoose/mongoose.module';
import { AudioModule } from './modules/queue/queue.module';
import { SseModule } from './modules/sse/sse.module';
import { TypeormModule } from './modules/typeorm/typeorm.module';
import { WorkerModule } from './modules/worker/worker.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({ rootPath: join(process.cwd(), 'public') }),
    EventEmitterModule.forRoot({
      delimiter: '.',
      wildcard: true,
      global: true,
      verboseMemoryLeak: true,
    }),
    SseModule,
    WorkerModule,
    AudioModule,
    CustomMongooseModule,
    TypeormModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
