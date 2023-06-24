'use client';

import { FC, useEffect } from 'react';

import { observer } from 'mobx-react-lite';

import clothes from 'store/clothes';

import { GoodsBlock } from 'components/goods-block';
import { GoodsSkeleton } from 'components/goods-skeleton';

export const GoodsWomenContainer: FC = observer(() => {
  const { getWomenClothes, womenClothes } = clothes;

  useEffect(() => {
    getWomenClothes();
  }, [getWomenClothes]);

  if (!womenClothes) {
    return null;
  }

  return womenClothes?.case({
    pending: () => <GoodsSkeleton />,
    rejected: () => <div>Error</div>,
    fulfilled: (value) => <GoodsBlock goods={value} />,
  });
});
