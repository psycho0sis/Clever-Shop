import type { FC } from 'react';
import React from 'react';
import Skeleton from 'react-loading-skeleton';

import 'react-loading-skeleton/dist/skeleton.css';

export const ProductHeaderSkeleton: FC = () => (
  <div>
    <Skeleton height={74} />
  </div>
);
