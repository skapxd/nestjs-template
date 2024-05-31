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

export interface SendMessageDTO {
  /**
   * @maxLength 255
   * @default "573000000000"
   */
  phone: string;
  /**
   * @maxLength 255
   * @default "Hello world"
   */
  message: string;
}

export interface QueueDTO {
  /**
   * @maxLength 255
   * @default "audio.mp3"
   */
  file: string;
}

export interface CreateMongooseDto {
  label: string;
  value: string;
}

export interface UpdateMongooseDto {
  label?: string;
  value?: string;
}

export interface CreateTypeormDto {
  label: string;
  value: string;
}

export interface TypeormEntity {
  id: number;
  label: string;
  value: string;
}

export interface UpdateTypeormDto {
  label?: string;
  value?: string;
}
