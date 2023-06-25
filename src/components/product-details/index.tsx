'use client';

import type { FC } from 'react';

import { observer } from 'mobx-react-lite';

import { IClothesResponse } from 'store/types';

import { Container } from 'components/layout/container';
import { Carousel } from 'components/product-slider';

import { ProductCardHeader } from './product-header';
import { Characteristics, Layout } from './styles';

export const ProductDetails: FC<IClothesResponse> = observer(
  ({ brand, images, name, rating, reviews }) => {
    const imagesToArr = images?.map(({ url }) => ({
      original: url,
      thumbnail: url,
    }));

    return (
      <>
        <ProductCardHeader
          brand={brand}
          productName={name}
          rating={rating}
          reviews={reviews}
        />
        <Container>
          <Layout>
            <Carousel images={imagesToArr} />
            <Characteristics></Characteristics>
          </Layout>
        </Container>
      </>
    );
  }
);
