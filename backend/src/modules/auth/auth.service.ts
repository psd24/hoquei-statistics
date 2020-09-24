import {forwardRef, Inject, Injectable} from '@nestjs/common';
import { RegisterUserDto } from '../user/dtos/register-user.dto';
import { UsersService } from '../user/users.service';
import { User } from '../../entities/user.entity';


@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
  ) {}


  async register(userDto: RegisterUserDto): Promise<User> {
    return this.usersService.register(userDto);
  }

}