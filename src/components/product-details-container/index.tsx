'use client';

import { FC, useEffect } from 'react';

import { observer } from 'mobx-react-lite';

import clothes from 'store/clothes';

import { ProductDetails } from 'components/product-details';
import { ProductHeaderSkeleton } from 'components/skeletons/product-header-skeleton';

interface IProps {
  category: string;
  id: string;
}

export const ProductDetailsContainer: FC<IProps> = observer(
  ({ category, id }) => {
    const { currentProduct, getCurrentProductCard } = clothes;

    useEffect(() => {
      getCurrentProductCard(category, id);
    }, [getCurrentProductCard, category, id]);

    if (!currentProduct) {
      return null;
    }

    return currentProduct?.case({
      pending: () => <ProductHeaderSkeleton />,
      rejected: () => <div>Error</div>,
      fulfilled: (value) => <ProductDetails {...value} />,
    });
  }
);
