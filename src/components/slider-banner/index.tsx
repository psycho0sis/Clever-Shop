import { TouchEvent, useState } from 'react';
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

export const SliderBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [touchPosition, setTouchPosition] = useState(0);
  const images = [0, 1];

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => prev + 1);

    if (currentSlide === images.length - 1) {
      setCurrentSlide(0);
    }
  };

  const handleNextSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(images.length - 1);
    }

    setCurrentSlide((prev) => prev - 1);
  };

  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };

  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    const touchDown = touchPosition;

    if (touchDown === null) {
      return;
    }

    const currentTouch = e.touches[0].clientX;
    const diff = touchDown - currentTouch;

    if (diff > 100) {
      handleNextSlide();
    }

    if (diff < -100) {
      handlePrevSlide();
    }

    setTouchPosition(0);
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
        <Subtitle>BANNER {currentSlide}</Subtitle>
        <Title>your Title text</Title>
      </Banner>
      <Slider>
        <img src={`/images/slider-${currentSlide}.png`} alt='Women clothes' />
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
