import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { SeedModule } from './seed/seed.module';
import { Connection } from 'typeorm';

@Module({
  imports: [TypeOrmModule.forRoot({
    autoLoadEntities:true
  }), AuthModule, UsersModule, SeedModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {
   // connection.connect();
  }
}
