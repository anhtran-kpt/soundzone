import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateArtistDto {
  @ApiProperty({ example: 'Bruno Mars', description: 'Artist name' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsOptional()
  biography?: string;

  @IsString()
  @IsOptional()
  avatarUrl?: string;
}
