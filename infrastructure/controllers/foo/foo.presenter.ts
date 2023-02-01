import { ApiProperty } from '@nestjs/swagger';
import { IOffer } from '../../../domain/model/offer.interface';
import { BasePresenter } from '../common/basePresenter';

export class OfferPresenter extends BasePresenter implements IOffer {
  @ApiProperty()
  id: string;

  @ApiProperty()
  type: string;

  constructor(offer: IOffer) {
    super();
    this.id = offer.id;
    this.type = offer.type;
    this.createdAt = offer.createdAt;
    this.updatedAt = offer.updatedAt;
  }
}
