'use client';

import type { FC } from 'react';
import Link from 'next/link';

import { Container } from 'components/layout/container';

import { info, socialLinks } from './config';
import {
  StyledInfo,
  StyledInfoItem,
  StyledSocialLinks,
  StyledTopBar,
  StyledTopBarBgWrapper,
} from './styles';

export const TopBar: FC = () => (
  <StyledTopBarBgWrapper>
    <Container>
      <StyledTopBar>
        <StyledInfo>
          {info.map(({ id, icon, content }) => (
            <StyledInfoItem key={id}>
              {icon}
              <p>{content}</p>
            </StyledInfoItem>
          ))}
        </StyledInfo>
        <StyledSocialLinks>
          {socialLinks.map(({ id, icon, link }) => (
            <Link href={link} key={id}>
              {icon}
            </Link>
          ))}
        </StyledSocialLinks>
      </StyledTopBar>
    </Container>
  </StyledTopBarBgWrapper>
);
