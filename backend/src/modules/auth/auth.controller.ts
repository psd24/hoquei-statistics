import { Controller, Post, Body, UnauthorizedException, UseGuards, Get, Request, Param, Delete, Put,NotAcceptableException, Query } from '@nestjs/common';

import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { User } from '../../entities/user.entity';
import { JwtAuthGuard } from './jwt-auth.guard';
import { AuthService } from './auth.service';
import { RegisterUserDto } from '../user/dtos/register-user.dto';
import { LoginDto } from './dtos/login.dto';

@ApiTags('Authentication')
@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('login')
    async login(@Body() body: LoginDto) {
      const user = await this.authService.validateUser(body.email, body.password);
      if (!user) {
        throw new UnauthorizedException();
      }
      return this.authService.login(user);
    }
  
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    @ApiOkResponse({ type: User })
    @Post('register')
    async register(@Body() registerDto: RegisterUserDto): Promise<User> {
      return this.authService.register(registerDto);
    }

}