import type { FC } from 'react';

import { Category, CategoryPanelWrapper, Filter, Filters } from './styles';

interface IProps {
  category: string;
}

export const CategoryPanel: FC<IProps> = ({ category }) => {
  return (
    <CategoryPanelWrapper>
      <Category>{category}</Category>
      <Filters>
        <Filter>NEW ARRIVALS</Filter>
        <Filter>SPECIALS</Filter>
        <Filter>BESTSELLERS</Filter>
        <Filter>MOST VIEWED</Filter>
        <Filter>FEATURED PRODUCTS</Filter>
      </Filters>
    </CategoryPanelWrapper>
  );
};
