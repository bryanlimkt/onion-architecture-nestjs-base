import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateOfferDto {
  @IsString()
  @ApiProperty()
  type!: string;
}

export class UpdateOfferDto extends PartialType(CreateOfferDto) {
  @ApiProperty({ required: false })
  type?: string;
}
