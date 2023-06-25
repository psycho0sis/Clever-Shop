import type { FC } from 'react';
import Image from 'next/image';

import { StyledNextButton } from './styles';

interface IProps {
  handleNextSlide: () => void;
  position: {
    top: number;
    right: number;
  };
}

export const NextButton: FC<IProps> = ({ handleNextSlide, position }) => (
  <StyledNextButton position={position} onClick={handleNextSlide}>
    <Image
      src='/images/next-arrow.svg'
      alt='Next image'
      width={7}
      height={14}
    />
  </StyledNextButton>
);
