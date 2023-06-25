import styled from 'styled-components';
import { flex, font } from 'styles/mixins';

export const Wrapper = styled.div`
  margin-bottom: 32px;
  padding: 10px 15px;
  background-color: var(--gr-white);
`;

export const Title = styled.h1`
  ${font({
    lineHeight: 36,
    size: 26,
    weight: 600,
  })};

  text-align: center;
`;

export const Info = styled.div`
  ${flex({
    direction: 'row',
    gap: '6px',
    justify: 'start',
    alignment: 'center',
  })};
`;

export const Rating = styled.p``;

export const Reviews = styled.span`
  ${font({
    lineHeight: 18,
    size: 11,
    weight: 500,
  })};

  color: var(--dark);
  text-align: center;
`;
