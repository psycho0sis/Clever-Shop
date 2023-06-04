import Link from 'next/link';

import styled from 'styled-components';
import { flex, font } from 'styles/mixins';

interface ICategory {
  gridarea?: string;
}

export const Wrapper = styled.div`
  ${flex({ gap: '30px', wrap: true, justify: 'center' })};
`;

export const LinksBlock = styled.div`
  display: grid;
  grid-template-areas:
    '. .'
    'block block';
  grid-template-rows: 200px 260px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
  width: 100%;
  max-width: 540px;
`;

export const Category = styled.div<ICategory>`
  position: relative;
  grid-area: ${({ gridarea }) => (gridarea ? gridarea : '')};
  overflow: hidden;
  cursor: pointer;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: 0.3s all ease-in-out;

    &:hover {
      transform: scale(1.1);
    }
  }

  & a {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const StyledLink = styled(Link)`
  ${font({
    lineHeight: 22,
    size: 16,
    weight: 500,
  })};

  position: absolute;
  z-index: 2;
  min-width: 118px;
  padding: 13px 0;
  color: var(--dark);
  text-align: center;
  background-color: var(--white);
  border-radius: 4px;
  transition: 0.5s all ease;

  &:active {
    box-shadow: 4px 4px 24px 0 rgb(34 60 80 / 20%);
  }
`;
