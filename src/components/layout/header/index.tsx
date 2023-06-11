'use client';

import type { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { HeaderControls } from 'components/header-controls';

import { Navigation } from '../navigation';
import { Wrapper } from './styles';

export const Header: FC = () => {
  return (
    <Wrapper>
      <Link href='/'>
        <Image
          src='/images/logo.svg'
          alt='CleverShop'
          width={150}
          height={32}
        />
      </Link>
      <Navigation />
      <HeaderControls />
    </Wrapper>
  );
};
