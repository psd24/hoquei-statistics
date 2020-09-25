import { Module } from '@nestjs/common';
import { UsersService } from './users.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entities/User';


@Module({
  providers: [UsersService],
  imports: [
    TypeOrmModule.forFeature([User])//, Role, Organization]),
  ],
  exports: [UsersService],
})
export class UsersModule {}
