import styled from 'styled-components';
import { flex, font } from 'styles/mixins';

export const BenefitsBlockWrapper = styled.div`
  width: 100%;
  border-bottom: 1px solid var(--gr-white);
`;

export const BenefitsContentWrapper = styled.div`
  ${flex({ gap: '36px' })};

  @media screen and (width <= 768px) {
    ${flex({ gap: '0px', direction: 'column' })};
  }
`;

export const BenefitsItemWrapper = styled.div`
  ${flex({ alignment: 'start', gap: '13px' })};

  padding: 32px;

  @media screen and (width <= 768px) {
    ${flex({ direction: 'column' })};
  }
`;

export const BenefitsTextWrapper = styled.div`
  ${flex({ alignment: 'start', direction: 'column' })};

  @media screen and (width <= 768px) {
    ${flex({ alignment: 'center', direction: 'column' })};
  }
`;

export const Title = styled.div`
  ${font({ lineHeight: 13, weight: 600 })};

  margin-bottom: 4px;
`;

export const Description = styled.div`
  ${font({ lineHeight: 22, weight: 500 })};
`;
