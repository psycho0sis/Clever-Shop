import { FC, useEffect, useState } from 'react';

import { observer } from 'mobx-react-lite';

import clothes from 'store/clothes';
import { IClothes } from 'store/types';

import { GoodsBlock } from 'components/goods-block';

export const GoodsMenContainer: FC = observer(() => {
  const [goods, setGoods] = useState<IClothes[]>([]);

  useEffect(() => {
    clothes.getMenClothes().then((res) => res && setGoods(res));
  }, []);

  return <GoodsBlock goods={goods} />;
});
