export type PhotosT = string;

export type PricesT = { [tag: string]: number };

export type ProductT = {
  id: number;
  title: string;
  prices: PricesT;
  photos: Array<PhotosT>;
  description: string;
  offerDiscount: number;
};

export type ProductIdT = Pick<ProductT, 'id' | 'title'>;
