import { Injectable, Logger } from '@nestjs/common';
import Piscina from 'piscina';

@Injectable()
export class WorkerService {
  private readonly logger = new Logger(WorkerService.name);
  private counter = 0;

  addCounter() {
    return this.counter++;
  }

  cron() {
    // @ts-expect-error: error
    const filename = new URL('./op.mjs', import.meta.url).href;
    const task = new Piscina({
      filename,
    });

    task.run({}, { name: 'op' }).then((res) => {
      this.logger.log(`Respuesta de la operación costosa: ${res}`);
    });
  }
}
