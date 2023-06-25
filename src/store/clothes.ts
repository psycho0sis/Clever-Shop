import axios from 'axios';
import { action, makeObservable, observable } from 'mobx';
import { fromPromise, IPromiseBasedObservable } from 'mobx-utils';

import { IClothesResponse } from './types';

const URL = 'https://64692499183682d6143abd85.mockapi.io/clever-shop/api';

const getClothes = async (path: string) =>
  (
    await axios.get<IClothesResponse[]>(`${URL}/${path}`, {
      headers: {
        Accept: 'application/json',
      },
    })
  ).data;

const getCurrentProduct = async (path: string, id: string) => {
  const res = await getClothes(path);
  const product = res.find((item) => item.id === id);

  return product;
};

class Clothes {
  womenClothes?: IPromiseBasedObservable<IClothesResponse[]>;
  menClothes?: IPromiseBasedObservable<IClothesResponse[]>;
  currentProduct?: IPromiseBasedObservable<IClothesResponse | undefined>;

  constructor() {
    makeObservable(this, {
      womenClothes: observable,
      menClothes: observable,
      currentProduct: observable,
      getWomenClothes: action,
      getMenClothes: action,
      getCurrentProductCard: action,
    });
  }

  getWomenClothes = () => {
    this.womenClothes = fromPromise(getClothes('women'));
  };

  getMenClothes = () => {
    this.menClothes = fromPromise(getClothes('men'));
  };

  getCurrentProductCard = (path: string, id: string) => {
    this.currentProduct = fromPromise(getCurrentProduct(path, id));

    return this.currentProduct;
  };
}

export default new Clothes();
