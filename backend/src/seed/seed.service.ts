import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
const defaultPassword = 'password';

@Injectable()
export class SeedService {
    constructor(
        private usersService: UsersService,
    ) {}

    async start() {
        const admin = await this.usersService.findByEmail('admin@admin.com');
        if (!admin) {         
            await this.usersService.register({
                name: 'admin',
                email: 'admin@admin.com',             
                code: 1,           
                password: defaultPassword
            });
    
        }
    }
}
