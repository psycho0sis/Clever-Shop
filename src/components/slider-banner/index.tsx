'use client';

import type { FC } from 'react';
import Image from 'next/image';

import { useCurrentSlide } from 'hooks/use-current-slide';

import {
  Banner,
  NextButton,
  PrevButton,
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
      <PrevButton onClick={handlePrevSlide}>
        <Image
          src='/images/prev-arrow.svg'
          alt='Previous image'
          width={7}
          height={14}
        />
      </PrevButton>
      <Banner>
        <Subtitle>BANNER</Subtitle>
        <Title>your Title text</Title>
      </Banner>
      <SliderContent
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {children}
      </SliderContent>
      <NextButton onClick={handleNextSlide}>
        <Image
          src='/images/next-arrow.svg'
          alt='Next image'
          width={7}
          height={14}
        />
      </NextButton>
    </SliderWrapper>
  );
};
