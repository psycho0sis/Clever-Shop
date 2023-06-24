import type { FC, PropsWithChildren } from 'react';
import React from 'react';
import Skeleton from 'react-loading-skeleton';

import 'react-loading-skeleton/dist/skeleton.css';

const Wrapper = ({ children }: PropsWithChildren<unknown>) => (
  <div
    style={{
      display: 'inline-block',
      margin: '15px',
      width: '235px',
      height: '318px',
    }}
  >
    {children}
  </div>
);

export const GoodsSkeleton: FC = () => (
  <div style={{ display: 'flex', gap: 30, justifyContent: 'space-around' }}>
    <Skeleton count={8} wrapper={Wrapper} inline width={235} height={318} />
  </div>
);
