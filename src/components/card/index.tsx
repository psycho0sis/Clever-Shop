import type { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { getPriceWithoutDiscount } from 'helpers/get-price-without-discount';
import { getRating } from 'helpers/get-rating';

import { IClothesResponse } from 'store/types';

import {
  CardWrapper,
  Info,
  InfoAboutPrice,
  Price,
  PriceWithoutDiscount,
  Rating,
  Title,
} from './styles';

export const Card: FC<IClothesResponse> = ({
  discount,
  category,
  id,
  images,
  name,
  price,
  rating,
}) => {
  const priceWithoutDiscount = getPriceWithoutDiscount(price, discount);

  return (
    <CardWrapper>
      <Link href={`/${category}/${id}`}>
        {!!images?.length && (
          <Image
            src={images[0].url || ''}
            alt={name || ''}
            width={235}
            height={318}
          />
        )}

        <Title>{name}</Title>
        <Info>
          <InfoAboutPrice>
            <Price>$ {price}</Price>
            <PriceWithoutDiscount>
              {discount && `$ ${priceWithoutDiscount}`}
            </PriceWithoutDiscount>
          </InfoAboutPrice>
          <Rating>{getRating(rating)}</Rating>
        </Info>
      </Link>
    </CardWrapper>
  );
};
