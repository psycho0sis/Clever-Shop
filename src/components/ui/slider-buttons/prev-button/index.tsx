import type { FC } from 'react';
import Image from 'next/image';

import { StyledPrevButton } from './styles';

interface IProps {
  handlePrevSlide: () => void;
  position: {
    top: number;
    left: number;
  };
}

export const PrevButton: FC<IProps> = ({ handlePrevSlide, position }) => (
  <StyledPrevButton position={position} onClick={handlePrevSlide}>
    <Image
      src='/images/prev-arrow.svg'
      alt='Previous image'
      width={7}
      height={14}
    />
  </StyledPrevButton>
);
