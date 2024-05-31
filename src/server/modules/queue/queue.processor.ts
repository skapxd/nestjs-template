import { InjectQueue, Process, Processor } from '@nestjs/bull';
import { Logger } from '@nestjs/common';
import { Job, Queue } from 'bull';

import { QUEUE_AUDIO } from './const';
import { QueueDTO } from './queue.dto';

@Processor(QUEUE_AUDIO.name)
export class AudioProcessor {
  private readonly logger = new Logger(AudioProcessor.name);
  constructor(@InjectQueue(QUEUE_AUDIO.name) private readonly queue: Queue) {}

  @Process(QUEUE_AUDIO.processAudio)
  private async process(job: Job<QueueDTO>) {
    this.logger.debug('Start transcoding...');
    let progress = 0;
    const limit = 100_000;
    for (let i = 0; i < limit; i++) {
      progress = (i / limit) * 100;
      const _ = +progress.toFixed(2);
      this.logger.log({ _, progress });
      await job.progress(_);
    }
    this.logger.debug('Transcoding completed');
  }

  add(dto: QueueDTO) {
    this.queue.add(QUEUE_AUDIO.processAudio, dto);
  }
}
