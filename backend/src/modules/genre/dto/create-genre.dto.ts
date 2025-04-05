import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateGenreDto {
  @ApiProperty({ example: 'Pop', description: 'Genre name' })
  @IsString()
  @IsNotEmpty()
  name: string;
}
