import axios from 'axios';
import { action, makeAutoObservable, observable, toJS } from 'mobx';

import { IClothes } from './types';

const URL = 'https://64692499183682d6143abd85.mockapi.io/clever-shop/api';

class Clothes {
  womenClothes: IClothes[] = [];
  menClothes: IClothes[] = [];

  constructor() {
    makeAutoObservable({
      womenClothes: observable,
      menClothes: observable,
      getWomenClothes: action,
      getMenClothes: action,
    });
  }

  getWomenClothes = async () => {
    try {
      const { data } = await axios.get<IClothes[]>(`${URL}/women`, {
        headers: {
          Accept: 'application/json',
        },
      });

      this.womenClothes = [...this.womenClothes, ...data];

      return toJS(this.womenClothes);
    } catch (error) {
      console.error(error);
    }
  };

  getMenClothes = async () => {
    try {
      const { data } = await axios.get<IClothes[]>(`${URL}/men`, {
        headers: {
          Accept: 'application/json',
        },
      });

      this.menClothes = [...this.menClothes, ...data];

      return toJS(this.menClothes);
    } catch (error) {
      console.error(error);
    }
  };
}

export default new Clothes();
