import { FC } from 'react';

import { v4 as uuidv4 } from 'uuid';

import { IClothes } from 'store/types';

interface IProps {
  goods: IClothes[];
}

export const GoodsBlock: FC<IProps> = ({ goods }) => {
  return (
    <div>
      {goods?.map((item) => (
        <h1 key={uuidv4()}>{item.name}</h1>
      ))}
    </div>
  );
};
