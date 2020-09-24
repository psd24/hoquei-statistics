import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsEmail, IsNumber, IsNotEmpty } from "class-validator";

export class RegisterUserDto {
    @ApiProperty({ required: true })
    @IsString()
    @IsNotEmpty()
    userName: string;
    
    @ApiProperty({ required: true })
    @IsNotEmpty()
    @IsEmail()
    userEmail: string;
    
    @ApiProperty({ required: true })
    @IsNotEmpty()
    @IsString()
    userPassword: string;

    @ApiProperty({ required: true })
    @IsNumber()
    role: number;
    
}