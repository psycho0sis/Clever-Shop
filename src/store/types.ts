interface IParticulars {
  isNewArrivals: boolean;
  isSpecial: boolean;
  isBestseller: boolean;
  isMostViewed: boolean;
  isFeatured: boolean;
}

interface IReview {
  name: string;
  text: string;
}

export interface IClothes {
  brand: string;
  category: 'men' | 'women';
  discount: string;
  id: string;
  images: { color: string; url: string; id?: string }[];
  material: string;
  name: string;
  particulars: IParticulars;
  price: number;
  rating: number;
  reviews: IReview[];
  sizes: string[];
}
