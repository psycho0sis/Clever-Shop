'use client';

import type { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Navigation } from '../navigation';
import { HeaderControls } from './header-controls';
import { Wrapper } from './styles';

export const Header: FC = () => (
  <Wrapper>
    <Link suppressHydrationWarning href='/'>
      <Image src='/images/logo.svg' alt='CleverShop' width={150} height={32} />
    </Link>
    <Navigation />
    <HeaderControls />
  </Wrapper>
);
