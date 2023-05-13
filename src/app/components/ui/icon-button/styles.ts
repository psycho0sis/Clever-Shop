import styled from 'styled-components';

import { IStyledIconButton } from './types';

export const StyledIconButton = styled.button<IStyledIconButton>`
  width: 100%;
  max-width: 18px;
  background-color: transparent;
  transition: 0.5s all ease;

  &:hover {
    transform: scale(0.9);

    & svg path {
      transition: 0.5s all ease;
    }
  }

  &:active {
    & svg {
      & path:first-child {
        fill: ${({ isFill }) => (isFill ? 'var(--dark)' : 'none')};
        stroke-width: 2;
      }
    }
  }
`;
