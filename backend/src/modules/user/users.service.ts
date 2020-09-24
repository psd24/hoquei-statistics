import {Injectable, BadRequestException, Inject, forwardRef} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../../entities/user.entity';
import { Role } from '../../entities/role.entity';
import { Repository, getConnection } from 'typeorm';
import { RegisterUserDto } from './dtos/register-user.dto';

@Injectable()
export class UsersService {
    private readonly users: User[];

    constructor(
        @InjectRepository(User)
        private readonly usersRepository: Repository<User>,
        @InjectRepository(Role)
        private readonly rolesRepository: Repository<Role>,
    ) {}

    async findByEmail(userEmail: string): Promise<User | undefined> {
        return this.usersRepository.findOne({
            relations: ['role'],
            where: {
                userEmail,
            },
        });
    }

    async register(userRegisterDto: RegisterUserDto): Promise<User> {
        const user = await this.findByEmail(userRegisterDto.userEmail);
        /*if (user) {
            throw new BadRequestException('User already registered.');
        }*/

        const newUser = new User();
        newUser.userEmail = userRegisterDto.userEmail;
        newUser.userName = userRegisterDto.userName;
        newUser.userPassword = userRegisterDto.userPassword;

        newUser.role = await this.rolesRepository.findOne({ roleId: userRegisterDto.role });
        if (!newUser.role) {
            throw new BadRequestException('Invalid role id.');
        }

        return this.usersRepository.save(newUser);
    }
    
}