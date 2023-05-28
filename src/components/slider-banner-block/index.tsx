import type { FC } from 'react';
import Image from 'next/image';

import { Container } from 'components/layout/container';
import { SliderBanner } from 'components/slider-banner';

import { links } from './config';
import { Category, LinksBlock, StyledLink, Wrapper } from './styles';

export const SliderBannerBlock: FC = () => {
  return (
    <Container>
      <Wrapper>
        <SliderBanner>
          <img src='/images/slider-0.png' alt='Women clothes' />
          <img src='/images/slider-1.png' alt='Women clothes' />
        </SliderBanner>
        <LinksBlock>
          {links.map(
            ({
              id,
              bgImage,
              route,
              title,
              gridarea,
              imageHeight,
              imageWidth,
            }) => (
              <Category key={id} gridarea={gridarea && gridarea}>
                <Image
                  src={bgImage}
                  alt={title}
                  width={imageWidth}
                  height={imageHeight}
                />
                <StyledLink href={route}>{title}</StyledLink>
              </Category>
            )
          )}
        </LinksBlock>
      </Wrapper>
    </Container>
  );
};
