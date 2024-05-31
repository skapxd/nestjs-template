import { Controller, Get, Param, Post, Query, Sse } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';

import { SseService } from './sse.service';

@Controller('sse')
export class SseController {
  constructor(private readonly sseService: SseService) {}

  @Get()
  render(@Query('id') id: string) {
    return this.sseService.render(id);
  }

  @Post()
  btn(@Query('counter') counter: number, @Query('id') id: string) {
    this.sseService.btn(counter, id);
  }

  @Post('all')
  @Cron(CronExpression.EVERY_SECOND)
  cron() {
    this.sseService.cron();
  }

  @Sse(':id')
  // eslint-disable-next-line @darraghor/nestjs-typed/param-decorator-name-matches-route-param
  sse(@Param('id') id: string) {
    return this.sseService.sse(id);
  }
}
