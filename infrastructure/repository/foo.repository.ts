import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IOffer } from '../../domain/model/offer.interface';
import { IOfferRepository } from '../../domain/repository/offerRepository.interface';
import { Offer } from '../entities/offer.entity';

@Injectable()
export class OfferRepository implements IOfferRepository {
  constructor(
    @InjectRepository(Offer)
    private readonly offerEntityRepository: Repository<Offer>,
  ) {}
  //define methods
}
