import type { FC } from 'react';
import Image from 'next/image';

import { Container } from 'components/layout/container';

import { benefits } from './data';
import {
  BenefitsBlockWrapper,
  BenefitsContentWrapper,
  BenefitsItemWrapper,
  BenefitsTextWrapper,
  Description,
  Title,
} from './styles';

const DEFAULT_SIZE = 26;

export const BenefitsBlock: FC = () => (
  <BenefitsBlockWrapper>
    <Container>
      <BenefitsContentWrapper>
        {benefits.map(({ id, image, title, description }) => (
          <BenefitsItemWrapper key={id}>
            <Image
              src={image}
              alt={title}
              width={DEFAULT_SIZE}
              height={DEFAULT_SIZE}
            />

            <BenefitsTextWrapper>
              <Title>{title}</Title>
              <Description>{description}</Description>
            </BenefitsTextWrapper>
          </BenefitsItemWrapper>
        ))}
      </BenefitsContentWrapper>
    </Container>
  </BenefitsBlockWrapper>
);
