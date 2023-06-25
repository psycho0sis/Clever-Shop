import type { FC } from 'react';

import { ProductDetailsContainer } from 'components/product-details-container';

interface IProps {
  params: {
    id: string;
  };
}

export const generateMetadata = ({ params: { id } }: IProps) => {
  return {
    title: `${id}`,
  };
};

const ProductPage: FC<IProps> = ({ params: { id } }) => {
  return (
    <div>
      <ProductDetailsContainer category='women' id={id} />
    </div>
  );
};

export default ProductPage;
