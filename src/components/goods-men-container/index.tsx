'use client';

import { FC, useEffect } from 'react';

import { observer } from 'mobx-react-lite';

import clothes from 'store/clothes';

import { GoodsBlock } from 'components/goods-block';
import { GoodsSkeleton } from 'components/skeletons/goods-skeleton';

export const GoodsMenContainer: FC = observer(() => {
  const { getMenClothes, menClothes } = clothes;

  useEffect(() => {
    getMenClothes();
  }, [getMenClothes]);

  if (!menClothes) {
    return null;
  }

  return menClothes?.case({
    pending: () => <GoodsSkeleton />,
    rejected: () => <div>Error</div>,
    fulfilled: (value) => <GoodsBlock goods={value} />,
  });
});
