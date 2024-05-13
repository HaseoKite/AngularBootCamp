export type ProductT = {
  id: string;
  title: string;
  prices: PricesT;
  photos: string[];
  description: string;
  offerDiscount?: number;
};

export type ProductIdT = Pick<ProductT, 'id' | 'title'>;

export type PricesT = { [tag: string]: number };
