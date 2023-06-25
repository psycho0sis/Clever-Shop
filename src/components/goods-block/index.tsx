'use client';

import type { FC } from 'react';

import { IClothesResponse } from 'store/types';

import { Card } from 'components/card';

import { CardsWrapper } from './styles';

interface IProps {
  goods: IClothesResponse[];
}

export const GoodsBlock: FC<IProps> = ({ goods }) => (
  <CardsWrapper>
    {goods?.slice(0, 8).map((item) => (
      <Card key={item.id} {...item} />
    ))}
  </CardsWrapper>
);
