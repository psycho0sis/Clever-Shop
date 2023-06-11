'use client';

import type { FC } from 'react';
import React from 'react';

import { StyledButton } from './styles';
import { IButtonProps } from './types';

export const Button: FC<IButtonProps> = ({
  block,
  buttonTheme = 'dark',
  fontSize,
  fontWeight,
  lineHeight,
  margins,
  outline,
  size,
  text,
  onClick,
}) => (
  <StyledButton
    block={block}
    buttonTheme={buttonTheme}
    fontSize={fontSize}
    fontWeight={fontWeight}
    lineHeight={lineHeight}
    margins={margins}
    outline={outline}
    onClick={onClick}
    size={size}
  >
    {text}
  </StyledButton>
);
