import { Primitives } from './utility-types/to-primitive';

export class CreateEvent {
  constructor(payload: Primitives<CreateEvent>) {
    delete payload['nameEvent'];
    Object.assign(this, payload);
  }

  toString() {
    return JSON.stringify(this, null, 2);
  }
}

export class CreateEventInterface {
  static nameEvent = [''];
  readonly nameEvent? = CreateEventInterface.nameEvent;
}
