//import { Role } from './../../entities/Role';


// import { Player } from './../../entities/Player';
import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/User';

import { Repository } from 'typeorm';
import { RegisterUserDto } from './dtos/register-user.dto';


@Injectable()
export class UsersService {
    private readonly users: User[];

    constructor(
        @InjectRepository(User)
        private readonly usersRepository: Repository<User>       
    ) {}

    async findByEmail(email: string): Promise<User | undefined> {
        return this.usersRepository.findOne({      
            where: {
                email,
            },
        });
    }

    async register(userDto: RegisterUserDto): Promise<User> {
        const user = await this.findByEmail(userDto.email);
        if (user) {
            throw new BadRequestException('User already registered.');
        }

        const newUser = new User();
        newUser.userEmail = userDto.email;
        newUser.userName = userDto.name;
        newUser.userId = userDto.code;
        newUser.userPassword = userDto.password;
        return this.usersRepository.save(newUser);
    }    
      async findAll(): Promise<User[]> {
        return this.usersRepository.find();
      }
    
      findOne(id: string): Promise<User> {
        return this.usersRepository.findOne(id);
      }
    
      async remove(id: string): Promise<void> {
        await this.usersRepository.delete(id);
      }
}
