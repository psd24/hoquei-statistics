import {forwardRef, Module} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from '../../entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Role } from '../../entities/role.entity';

@Module({
  providers: [UsersService],
  imports: [
    TypeOrmModule.forFeature([User, Role]),
  ],
  exports: [UsersService],
})
export class UsersModule {}