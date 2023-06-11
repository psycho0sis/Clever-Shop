'use client';

import type { FC } from 'react';

import { StyledContainer } from './styles';

interface IProps {
  children: JSX.Element | JSX.Element[];
}

export const Container: FC<IProps> = ({ children }) => (
  <StyledContainer>{children}</StyledContainer>
);
