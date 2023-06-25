import type { ReactNode } from 'react';
import Image from 'next/image';

const DEFAULT_AMOUNT_OF_STARS = 5;

type IGetRating = (rating?: number) => ReactNode[];

export const getRating: IGetRating = (rating = 0) =>
  new Array(DEFAULT_AMOUNT_OF_STARS)
    .fill(
      <Image
        alt='Rating'
        src='/images/rating-star.svg'
        width={10}
        height={10}
      />
    )
    .fill(
      <Image
        alt='Rating'
        src='/images/filled-rating-star.svg'
        width={10}
        height={10}
      />,
      DEFAULT_AMOUNT_OF_STARS - rating
    )
    .reverse();
