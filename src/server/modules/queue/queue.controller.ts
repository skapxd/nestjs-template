import { Body, Controller, Post } from '@nestjs/common';

import { QueueDTO } from './queue.dto';
import { AudioProcessor } from './queue.processor';

@Controller('audio')
export class AudioController {
  constructor(private readonly audioProcessor: AudioProcessor) {}

  @Post('transcode')
  async transcode(@Body() body: QueueDTO) {
    this.audioProcessor.add(body);
  }
}
