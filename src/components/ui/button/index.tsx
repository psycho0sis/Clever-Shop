'use client';

import type { FC } from 'react';
import React from 'react';

import { StyledButton } from './styles';
import { IButtonProps } from './types';

export const Button: FC<IButtonProps> = (props) => (
  <StyledButton {...props}>{props.text}</StyledButton>
);
