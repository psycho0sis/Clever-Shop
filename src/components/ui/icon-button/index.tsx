'use client';

import type { FC } from 'react';
import React from 'react';

import { StyledIconButton } from './styles';
import { IIconButtonProps } from './types';

export const IconButton: FC<IIconButtonProps> = ({
  children,
  isfill,
  onClick,
}) => (
  <StyledIconButton isfill={isfill} onClick={onClick}>
    {children}
  </StyledIconButton>
);
