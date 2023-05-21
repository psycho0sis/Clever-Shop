import Link from 'next/link';

import styled from 'styled-components';
import { font } from 'styles/mixins';

interface IStyledLink {
  path: string;
}

export const StyledNavigation = styled.nav``;

export const StyledLink = styled(Link)<IStyledLink>`
  ${({ href, path }) =>
    font({
      lineHeight: 16,
      size: 14,
      weight: href === path ? 700 : 400,
    })};

  margin-right: 32px;
  color: var(--dark);
`;
