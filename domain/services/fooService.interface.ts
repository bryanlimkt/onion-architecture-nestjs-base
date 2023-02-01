import { IOffer } from '../model/offer.interface';

export abstract class IOfferService {
  abstract create(offer: IOffer);
  abstract findAll();
  abstract findOne(id: string);
  abstract update(id: string, offer: IOffer);
  abstract remove(id: string);
}
