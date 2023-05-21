import type { FC } from 'react';

interface IProps {
  params: {
    id: string;
  };
}

export const generateMetadata = ({ params: { id } }: IProps) => {
  return {
    title: `Product ${id}`,
  };
};

const ProductPage: FC<IProps> = ({ params: { id } }) => {
  return <div>product {id}</div>;
};

export default ProductPage;
