import { randomUUID } from 'node:crypto';

import { Injectable, Logger } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { fromEvent, map } from 'rxjs';

@Injectable()
export class SseService {
  private readonly logger = new Logger(SseService.name);

  constructor(private eventEmitter: EventEmitter2) {}

  async cron() {
    this.eventEmitter.emit('btn', { counter: 1, id: null });
  }

  render(uuid?: string) {
    const _uuid = uuid || randomUUID();

    return `
    <button onclick="fn()">this</button>
    <button onclick="fnAll()">all</button>

      <ul></ul>

      <script type="text/javascript">
      function fn() {
        fetch('sse?counter=1000&id=${_uuid}', {
        method: 'POST',
        });
      }

      function fnAll() {
        fetch('sse/all', {
          method: 'POST',
        });
      }

      const ul = document.querySelector('ul')
      const eventSource = new EventSource('/sse/${_uuid}');
      eventSource.onmessage = ({ data }) => {
        const message = document.createElement('li');
        message.innerText = 'New message: ' + data;
        ul.insertBefore(message, ul.firstChild);
      }
      </script>
    `.replace(/  /g, '');
  }

  btn(counter: number, id: string) {
    this.eventEmitter.emit('btn', { counter, id });
    this.logger.log(`${id} - ${counter}`);
    return { counter };
  }

  sse(id: string) {
    let counter = 0;
    return fromEvent(this.eventEmitter, 'btn').pipe(
      map((_: any) => {
        counter += _.counter;

        // return new MessageEvent("order", { data: { hello: 'world', counter } })
        if (_.id === id) {
          return { data: { hello: 'world', counter } };
        }

        if (_.id === null) {
          return { data: { hello: 'world', counter } };
        }
      }),
    );
  }
}
