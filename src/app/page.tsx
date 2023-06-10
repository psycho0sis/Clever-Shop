'use client';

import type { FC } from 'react';

import { BenefitsBlock } from 'components/benefits-block';
import { GoodsMenContainer } from 'components/goods-men-container';
import { GoodsWomenContainer } from 'components/goods-women-container';
import { SliderBannerBlock } from 'components/slider-banner-block';

const Home: FC = () => {
  return (
    <main>
      <SliderBannerBlock />
      <BenefitsBlock />
      <GoodsWomenContainer />
      <GoodsMenContainer />
    </main>
  );
};

export default Home;
