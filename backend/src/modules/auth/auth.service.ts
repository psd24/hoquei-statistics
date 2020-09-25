import {forwardRef, Inject, Injectable} from '@nestjs/common';
import { compare, hash } from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { RegisterUserDto } from '../user/dtos/register-user.dto';
import { UsersService } from '../user/users.service';
import { User } from '../../entities/user.entity';


@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<User> {
    const user = await this.usersService.findByEmail(email);
    if (user && await compare(pass, user.userPassword)) {
      return user;
    }
    return null;
  }

  async login(user: any) {
    const payload = { id: user.id, name: user.name, email: user.email, role: user.role };
    return {
      accessToken: this.jwtService.sign(payload),
      role: user.role
    };
  }

  async register(userDto: RegisterUserDto): Promise<User> {
    return this.usersService.register(userDto);
  }

}