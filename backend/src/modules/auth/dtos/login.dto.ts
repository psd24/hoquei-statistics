import { IsString, IsEmail, IsNotEmpty } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class LoginDto {
    @ApiProperty({ required: true })
    @IsEmail()
    userEmail: string;

    @ApiProperty({ required: true })
    @IsString()
    @IsNotEmpty()
    userPassword: string;
}