'use client';

import type { FC } from 'react';

import { Subtitle, Title, Wrapper } from 'styles/pages/NotFound/styles';

const NotFound: FC = () => {
  return (
    <Wrapper>
      <Title>404 NOT FOUND</Title>
      <Subtitle href='/'>Keep calm and return to the previous page</Subtitle>
    </Wrapper>
  );
};

export default NotFound;
