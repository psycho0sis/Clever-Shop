'use client';

import type { FC } from 'react';

import { useCurrentSlide } from 'hooks/use-current-slide';

import { NextButton } from 'components/ui/slider-buttons/next-button';
import { PrevButton } from 'components/ui/slider-buttons/prev-button';

import {
  Banner,
  SliderContent,
  SliderWrapper,
  Subtitle,
  Title,
} from './styles';

interface IPops {
  children: JSX.Element[];
}

export const SliderBanner: FC<IPops> = ({ children }) => {
  const {
    currentIndex,
    handleNextSlide,
    handlePrevSlide,
    handleTouchStart,
    handleTouchMove,
  } = useCurrentSlide(children.length);

  return (
    <SliderWrapper
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      <PrevButton
        handlePrevSlide={handlePrevSlide}
        position={{ top: 47, left: 4 }}
      />
      <Banner>
        <Subtitle>BANNER</Subtitle>
        <Title>your Title text</Title>
      </Banner>
      <SliderContent
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {children}
      </SliderContent>
      <NextButton
        handleNextSlide={handleNextSlide}
        position={{ top: 47, right: 4 }}
      />
    </SliderWrapper>
  );
};
