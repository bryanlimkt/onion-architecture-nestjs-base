import { IOffer } from '../model/offer.interface';

export abstract class IOfferRepository {
  abstract getAll(): Promise<IOffer[]>;
  abstract get(id: string): Promise<IOffer>;
  abstract create(offer: IOffer): Promise<IOffer>;
  abstract delete(id: string);
  abstract update(id: string, item: IOffer);
}
