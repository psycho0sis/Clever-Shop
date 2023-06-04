'use client';

import styled from 'styled-components';
import { flex, font } from 'styles/mixins';

export const StyledTopBarBgWrapper = styled.div`
  padding: 6px 15px;
  background-color: var(--dark);
`;

export const StyledTopBar = styled.div`
  ${flex({ alignment: 'center' })};

  color: var(--white);
`;

export const StyledInfo = styled.div`
  ${flex({ alignment: 'center' })};

  gap: 40px;
`;

export const StyledInfoItem = styled.div`
  ${flex({ alignment: 'center' })};

  & svg {
    max-width: 10.5px;
  }

  & p {
    ${font({
      lineHeight: 13,
      size: 11,
      weight: 500,
    })};
  }

  gap: 10px;
`;

export const StyledSocialLinks = styled.div`
  ${flex({ alignment: 'center' })};

  flex: 0 1 86px;
`;
