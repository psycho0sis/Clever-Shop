import axios from 'axios';
import { action, makeObservable, observable } from 'mobx';
import { fromPromise, IPromiseBasedObservable } from 'mobx-utils';

import { IClothes } from './types';

const URL = 'https://64692499183682d6143abd85.mockapi.io/clever-shop/api';

const getClothes = async (path: string) =>
  (
    await axios.get<IClothes[]>(`${URL}/${path}`, {
      headers: {
        Accept: 'application/json',
      },
    })
  ).data;

class Clothes {
  womenClothes?: IPromiseBasedObservable<IClothes[]>;
  menClothes?: IPromiseBasedObservable<IClothes[]>;

  constructor() {
    makeObservable(this, {
      womenClothes: observable,
      menClothes: observable,
      getWomenClothes: action,
      getMenClothes: action,
    });
  }

  getWomenClothes = async () => {
    this.womenClothes = fromPromise(getClothes('women'));
  };

  getMenClothes = async () => {
    this.menClothes = fromPromise(getClothes('men'));
  };
}

export default new Clothes();
