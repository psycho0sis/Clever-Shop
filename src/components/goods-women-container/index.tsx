import { FC, useEffect, useState } from 'react';

import { observer } from 'mobx-react-lite';

import clothes from 'store/clothes';
import { IClothes } from 'store/types';

import { GoodsBlock } from 'components/goods-block';

export const GoodsWomenContainer: FC = observer(() => {
  const [goods, setGoods] = useState<IClothes[]>([]);

  useEffect(() => {
    clothes.getWomenClothes().then((res) => res && setGoods(res));
  }, []);

  return <GoodsBlock goods={goods} />;
});
