import type { FC } from 'react';
import Link from 'next/link';

import { BenefitsBlock } from 'components/benefits-block';
import { GoodsContainer } from 'components/goods-container';
import { GoodsMenContainer } from 'components/goods-men-container';
import { GoodsWomenContainer } from 'components/goods-women-container';
import { Container } from 'components/layout/container';
import { SliderBannerBlock } from 'components/slider-banner-block';
import { Button } from 'components/ui/button';

const Home: FC = () => (
  <main>
    <SliderBannerBlock />
    <BenefitsBlock />
    <Container>
      <GoodsContainer category="Women's">
        <GoodsWomenContainer />
      </GoodsContainer>
      <Link href='/women'>
        <Button block buttonTheme='light' text='SEE ALL' margins='48px 0' />
      </Link>
      <GoodsContainer category="Men's">
        <GoodsMenContainer />
      </GoodsContainer>
      <Link href='/men'>
        <Button block buttonTheme='light' text='SEE ALL' margins='48px 0' />
      </Link>
    </Container>
  </main>
);

export default Home;
