'use client';

import type { FC } from 'react';

import { BenefitsBlock } from 'components/benefits-block';
import { SliderBannerBlock } from 'components/slider-banner-block';

const Home: FC = () => {
  return (
    <main>
      <SliderBannerBlock />
      <BenefitsBlock />
    </main>
  );
};

export default Home;
