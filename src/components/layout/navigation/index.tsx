'use client';

import { usePathname } from 'next/navigation';

import { routes } from './config';
import { StyledLink, StyledNavigation } from './styles';

export const Navigation = () => {
  const pathname = usePathname();

  return (
    <StyledNavigation>
      {routes.map(({ id, path, title }) => (
        <StyledLink key={id} href={path} path={pathname}>
          {title}
        </StyledLink>
      ))}
    </StyledNavigation>
  );
};
