import type { FC } from 'react';

import { IconButton } from 'components/ui/icon-button';
import { CartIcon, EarthIcon, SearchIcon, UserIcon } from 'components/ui/icons';

import { Controls } from './styles';

export const HeaderControls: FC = () => {
  return (
    <Controls>
      <IconButton isFill={false} onClick={() => console.log('earth is open')}>
        <EarthIcon />
      </IconButton>
      <IconButton isFill={false} onClick={() => console.log('search is open')}>
        <SearchIcon />
      </IconButton>
      <IconButton isFill={false} onClick={() => console.log('profile is open')}>
        <UserIcon />
      </IconButton>
      <IconButton isFill={false} onClick={() => console.log('cart is open')}>
        <CartIcon />
      </IconButton>
    </Controls>
  );
};
