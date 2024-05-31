import { BullAdapter } from '@bull-board/api/bullAdapter';
import { ExpressAdapter } from '@bull-board/express';
import { BullBoardModule } from '@bull-board/nestjs';
import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import RedisMemoryServer from 'redis-memory-server';

import { QUEUE_AUDIO } from './const';
import { AudioController } from './queue.controller';
import { AudioProcessor } from './queue.processor';

@Module({
  imports: [
    BullModule.forRootAsync({
      useFactory: async () => {
        const redisServer = new RedisMemoryServer();

        const host = await redisServer.getHost();
        const port = await redisServer.getPort();

        return {
          redis: { host, port },
          defaultJobOptions: {
            attempts: 5,
          },
        };
      },
    }),
    BullModule.registerQueue({
      name: QUEUE_AUDIO.name,
    }),
    BullBoardModule.forFeature({
      name: QUEUE_AUDIO.name,
      adapter: BullAdapter,
    }),
    BullBoardModule.forRoot({
      route: '/queues',
      adapter: ExpressAdapter,
    }),
  ],
  controllers: [AudioController],
  providers: [AudioProcessor],
})
export class AudioModule {}
