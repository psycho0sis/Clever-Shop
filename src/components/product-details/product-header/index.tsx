import type { FC } from 'react';

import { getRating } from 'helpers/get-rating';

import { Container } from 'components/layout/container';

import { Info, Rating, Reviews, Title, Wrapper } from './styles';

interface IProps {
  brand?: string;
  productName?: string;
  rating?: number;
  reviews?: { name: string; text: string }[];
}

export const ProductCardHeader: FC<IProps> = ({
  brand,
  productName,
  rating,
  reviews,
}) => (
  <Wrapper>
    <Container>
      <Title>{`${productName} ${brand}`}</Title>
      <Info>
        {rating && <Rating>{getRating(rating)}</Rating>}
        <Reviews>{reviews?.length} reviews</Reviews>
      </Info>
    </Container>
  </Wrapper>
);
