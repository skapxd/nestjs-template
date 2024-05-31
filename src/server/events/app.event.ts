import { IsString, MaxLength } from '@nestjs/class-validator';
import { ApiProperty } from '@nestjs/swagger';

import { Primitives } from '#/src/shared/utility-types/to-primitive';

import {
  CreateEvent,
  CreateEventInterface,
} from '../../shared/create-event-interface';

export class MessageSendedEvent
  extends CreateEvent
  implements CreateEventInterface
{
  static nameEvent = ['message', 'sended'];
  readonly nameEvent? = MessageSendedEvent.nameEvent;
  @ApiProperty({ default: '573000000000' })
  @IsString()
  @MaxLength(255)
  phone: string;

  @ApiProperty({ default: 'Hello world' })
  @IsString()
  @MaxLength(5)
  message: string;

  constructor(payload: Primitives<MessageSendedEvent>) {
    super(payload);
  }
}
