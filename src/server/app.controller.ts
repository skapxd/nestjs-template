import {
  Body,
  Controller,
  Get,
  Logger,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { ApiOkResponse } from '@nestjs/swagger';

import { CreateEventInterface } from '../shared/create-event-interface';
import { AppService } from './app.service';
import { GetAllMessageDTO } from './dto/get-all-messages.dto';
import { SendMessageDTO } from './dto/send-message.dto';
import { MessageSendedEvent } from './events/app.event';
import { AuthorizationGuard } from './guards/authorization.guard';
import { RolesGuard } from './guards/roles.guard';

@Controller()
export class AppController {
  private readonly logger = new Logger(AppController.name);

  constructor(private readonly appService: AppService) {}

  @UseGuards(AuthorizationGuard)
  @ApiOkResponse({ type: SendMessageDTO })
  @Post()
  sendMessage(@Body() dto: SendMessageDTO) {
    return this.appService.sendMessage(dto);
  }

  @UseGuards(AuthorizationGuard)
  @Get()
  getAllMessages(@Query() query: GetAllMessageDTO) {
    return this.appService.getMessages(query);
  }

  @Post('roles')
  @UseGuards(new RolesGuard(['admin']))
  getRoles() {
    return 'roles';
  }

  @OnEvent(MessageSendedEvent.nameEvent, { async: true })
  handleOrderCreatedEvent(payload: MessageSendedEvent) {
    return this.logger.log(payload.toString());
  }

  @OnEvent('**', { async: true })
  handleAllEvents({}: CreateEventInterface) {
    // this.logger.log(payload);
  }
}
