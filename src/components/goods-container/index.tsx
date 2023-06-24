'use client';

import type { FC, ReactNode } from 'react';
import React from 'react';

import { CategoryPanel } from 'components/category-panel';

interface IProps {
  category: string;
  children: ReactNode;
}

export const GoodsContainer: FC<IProps> = ({ category, children }) => {
  return (
    <div>
      <CategoryPanel category={category} />
      {children}
    </div>
  );
};
