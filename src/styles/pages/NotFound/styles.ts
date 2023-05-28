import Link from 'next/link';

import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const Title = styled.h1`
  color: var(--dark);
  font-size: 70px;
  text-align: center;
`;

export const Subtitle = styled(Link)`
  color: var(--black);
  font-size: 30px;
  text-align: center;
  text-decoration: underline;
`;
