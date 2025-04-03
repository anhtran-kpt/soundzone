import { PartialType } from '@nestjs/mapped-types';
import { CreatePlayHistoryDto } from './create-play-history.dto';

export class UpdatePlayHistoryDto extends PartialType(CreatePlayHistoryDto) {}
