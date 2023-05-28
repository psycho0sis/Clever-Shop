import { FC, TouchEvent, useEffect, useState } from 'react';
import Image from 'next/image';

import {
  Banner,
  NextButton,
  PrevButton,
  Slider,
  SliderWrapper,
  Subtitle,
  Title,
} from './styles';

interface IPops {
  children: JSX.Element[];
}

export const SliderBanner: FC<IPops> = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(children.length);

  const [touchPosition, setTouchPosition] = useState<number | null>(null);

  useEffect(() => {
    setLength(children.length);
  }, [children]);

  const handleNextSlide = () => {
    if (currentIndex < length - 1) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const handlePrevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    const { clientX } = e.touches[0];
    setTouchPosition(clientX);
  };

  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    const touchDown = touchPosition;

    if (touchDown === null) return;

    const { clientX } = e.touches[0];
    const diff = touchDown - clientX;

    if (diff > 5) handleNextSlide();

    if (diff < -5) handlePrevSlide();

    setTouchPosition(null);
  };

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
        <Subtitle>BANNER {currentIndex}</Subtitle>
        <Title>your Title text</Title>
      </Banner>
      <Slider style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {children}
      </Slider>
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
