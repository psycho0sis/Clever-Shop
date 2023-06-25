'use client';

import type { FC } from 'react';
import ImageGallery from 'react-image-gallery';

import { NextButton } from 'components/ui/slider-buttons/next-button';
import { PrevButton } from 'components/ui/slider-buttons/prev-button';

import './styles.css';

interface IProps {
  images?: {
    original: string;
    thumbnail: string;
  }[];
}

export const Carousel: FC<IProps> = ({ images }) => (
  <ImageGallery
    items={images}
    showPlayButton={false}
    showFullscreenButton={false}
    renderLeftNav={(onClick: () => void) => (
      <PrevButton handlePrevSlide={onClick} position={{ top: 47, left: 4 }} />
    )}
    renderRightNav={(onClick: () => void) => (
      <NextButton handleNextSlide={onClick} position={{ top: 47, right: 4 }} />
    )}
  />
);
