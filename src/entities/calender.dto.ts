import {
    IsDefined,
    IsEmail,
    IsEnum,
    IsIn,
    IsNumber,
    IsOptional,
    IsString,
} from '@nestjs/class-validator';
export class CalenderDto {
    @IsDefined()
    @IsString()
    operation: string;
}