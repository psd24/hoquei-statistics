import { RegisterUserDto } from './dtos/register-user.dto';
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';

import { UsersService } from './users.service';
import { User } from 'src/entities/User';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: RegisterUserDto): Promise<User> {
    return this.usersService.register(createUserDto);
  }

  @Get()
  findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<User> {
    return this.usersService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.usersService.remove(id);
  }
}
