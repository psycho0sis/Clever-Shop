import styled from 'styled-components';
import { flex, font } from 'styles/mixins';

export const CardWrapper = styled.div`
  & a {
    color: var(--dark);
  }
`;

export const Title = styled.p`
  ${font({ lineHeight: 16, size: 14, weight: 300 })};

  margin-top: 16px;
  margin-bottom: 12px;
  opacity: 0.6;
`;

export const InfoAboutPrice = styled.div`
  ${flex({ gap: '4px' })};
`;

export const Price = styled.p`
  ${font({ lineHeight: 16, size: 14, weight: 700 })};
`;
export const PriceWithoutDiscount = styled.p`
  ${font({ lineHeight: 16, size: 14, weight: 700 })};

  opacity: 0.6;
  text-decoration-line: line-through;
`;

export const Info = styled.div`
  ${flex({ justify: 'space-between' })};
`;

export const Rating = styled.div`
  ${flex({ gap: '3px' })};
`;
