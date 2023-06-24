'use client';

import type { FC, ReactNode } from 'react';

import { StyledContainer } from './styles';

interface IProps {
  children: ReactNode | ReactNode[];
}

export const Container: FC<IProps> = ({ children }) => (
  <StyledContainer>{children}</StyledContainer>
);
