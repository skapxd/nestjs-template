import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';

import { TypeormEntity } from './entities/typeorm.entity';
import { TypeormController } from './typeorm.controller';
import { TypeormService } from './typeorm.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      database: join(__dirname, 'db.sqlite'),
      // database: ':memory:',
      type: 'better-sqlite3',
      synchronize: true,
      dropSchema: true,
      entities: [TypeormEntity],
    }),
    TypeOrmModule.forFeature([TypeormEntity]),
  ],
  controllers: [TypeormController],
  providers: [TypeormService],
})
export class TypeormModule {}
