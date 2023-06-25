'use client';

import type { FC, MouseEventHandler } from 'react';
import ImageGallery, { ReactImageGalleryItem } from 'react-image-gallery';

import { NextButton } from 'components/ui/slider-buttons/next-button';
import { PrevButton } from 'components/ui/slider-buttons/prev-button';

import './styles.css';

interface IProps {
  images: ReadonlyArray<ReactImageGalleryItem>;
}

export const Carousel: FC<IProps> = ({ images }) => (
  <ImageGallery
    items={images}
    showPlayButton={false}
    showFullscreenButton={false}
    renderLeftNav={(onClick: MouseEventHandler<HTMLElement>) => (
      <PrevButton handlePrevSlide={onClick} position={{ top: 47, left: 4 }} />
    )}
    renderRightNav={(onClick: MouseEventHandler<HTMLElement>) => (
      <NextButton handleNextSlide={onClick} position={{ top: 47, right: 4 }} />
    )}
  />
);
