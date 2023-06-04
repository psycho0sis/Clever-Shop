import type { TouchEvent } from 'react';
import { useEffect, useState } from 'react';

export const useCurrentSlide = (quantityOfSlides: number) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(quantityOfSlides);
  const [touchPosition, setTouchPosition] = useState<number | null>(null);

  useEffect(() => {
    setLength(length);
  }, [quantityOfSlides, length]);

  const handleNextSlide = () => {
    if (currentIndex < length - 1)
      setCurrentIndex((prevState) => prevState + 1);
  };

  const handlePrevSlide = () => {
    if (currentIndex > 0) setCurrentIndex((prevState) => prevState - 1);
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

  return {
    currentIndex,
    handleNextSlide,
    handlePrevSlide,
    handleTouchStart,
    handleTouchMove,
  };
};
