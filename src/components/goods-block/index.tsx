'use client';

import type { FC } from 'react';

import { IClothes } from 'store/types';

import { Card } from 'components/card';

import { CardsWrapper } from './styles';

interface IProps {
  goods: IClothes[] | undefined;
}

export const GoodsBlock: FC<IProps> = ({ goods }) => (
  <CardsWrapper>
    {goods?.slice(0, 8).map((item) => (
      <Card key={item.id} {...item} />
    ))}
  </CardsWrapper>
);
