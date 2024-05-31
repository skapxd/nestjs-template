/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

import {
  CreateMongooseDto,
  CreateTypeormDto,
  QueueDTO,
  SendMessageDTO,
  TypeormEntity,
  UpdateMongooseDto,
  UpdateTypeormDto,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Api<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @name AppControllerSendMessage
   * @request POST:/api
   * @secure
   */
  appControllerSendMessage = (data: SendMessageDTO, params: RequestParams = {}) =>
    this.http.request<SendMessageDTO, any>({
      path: `/api`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @name AppControllerGetAllMessages
   * @request GET:/api
   * @secure
   */
  appControllerGetAllMessages = (
    query: {
      /**
       * @maxLength 255
       * @default "573000000000"
       */
      phone: string;
    },
    params: RequestParams = {},
  ) =>
    this.http.request<void, any>({
      path: `/api`,
      method: 'GET',
      query: query,
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @name SseControllerRender
   * @request GET:/api/sse
   * @secure
   */
  sseControllerRender = (
    query: {
      id: string;
    },
    params: RequestParams = {},
  ) =>
    this.http.request<string, any>({
      path: `/api/sse`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @name SseControllerBtn
   * @request POST:/api/sse
   * @secure
   */
  sseControllerBtn = (
    query: {
      counter: number;
      id: string;
    },
    params: RequestParams = {},
  ) =>
    this.http.request<void, any>({
      path: `/api/sse`,
      method: 'POST',
      query: query,
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @name SseControllerCron
   * @request POST:/api/sse/all
   * @secure
   */
  sseControllerCron = (params: RequestParams = {}) =>
    this.http.request<void, any>({
      path: `/api/sse/all`,
      method: 'POST',
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @name SseControllerSse
   * @request GET:/api/sse/{id}
   * @secure
   */
  sseControllerSse = (id: string, params: RequestParams = {}) =>
    this.http.request<void, any>({
      path: `/api/sse/${id}`,
      method: 'GET',
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @name WorkerControllerAddCounter
   * @request GET:/api/worker
   * @secure
   */
  workerControllerAddCounter = (params: RequestParams = {}) =>
    this.http.request<number, any>({
      path: `/api/worker`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @name AudioControllerTranscode
   * @request POST:/api/audio/transcode
   * @secure
   */
  audioControllerTranscode = (data: QueueDTO, params: RequestParams = {}) =>
    this.http.request<void, any>({
      path: `/api/audio/transcode`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @name MongooseControllerCreate
   * @request POST:/api/mongoose
   * @secure
   */
  mongooseControllerCreate = (data: CreateMongooseDto, params: RequestParams = {}) =>
    this.http.request<void, any>({
      path: `/api/mongoose`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @name MongooseControllerFindAll
   * @request GET:/api/mongoose
   * @secure
   */
  mongooseControllerFindAll = (params: RequestParams = {}) =>
    this.http.request<object[], any>({
      path: `/api/mongoose`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @name MongooseControllerUpdate
   * @request PATCH:/api/mongoose/{id}
   * @secure
   */
  mongooseControllerUpdate = (id: string, data: UpdateMongooseDto, params: RequestParams = {}) =>
    this.http.request<void, any>({
      path: `/api/mongoose/${id}`,
      method: 'PATCH',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @name MongooseControllerRemove
   * @request DELETE:/api/mongoose/{id}
   * @secure
   */
  mongooseControllerRemove = (id: string, params: RequestParams = {}) =>
    this.http.request<void, any>({
      path: `/api/mongoose/${id}`,
      method: 'DELETE',
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @name TypeormControllerCreate
   * @request POST:/api/typeorm
   * @secure
   */
  typeormControllerCreate = (data: CreateTypeormDto, params: RequestParams = {}) =>
    this.http.request<void, any>({
      path: `/api/typeorm`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @name TypeormControllerFindAll
   * @request GET:/api/typeorm
   * @secure
   */
  typeormControllerFindAll = (params: RequestParams = {}) =>
    this.http.request<TypeormEntity[], any>({
      path: `/api/typeorm`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @name TypeormControllerUpdate
   * @request PATCH:/api/typeorm/{id}
   * @secure
   */
  typeormControllerUpdate = (id: string, data: UpdateTypeormDto, params: RequestParams = {}) =>
    this.http.request<void, any>({
      path: `/api/typeorm/${id}`,
      method: 'PATCH',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @name TypeormControllerRemove
   * @request DELETE:/api/typeorm/{id}
   * @secure
   */
  typeormControllerRemove = (id: string, params: RequestParams = {}) =>
    this.http.request<void, any>({
      path: `/api/typeorm/${id}`,
      method: 'DELETE',
      secure: true,
      ...params,
    });
}
