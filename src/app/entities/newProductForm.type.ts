export type TitleT = string;

export type PriceT = {
  tag: string;
  price: number;
};

export type PhotoT = string;

export type DescriptionT = string;

export type DiscountT = number;

export type newProductFormT = {
  title: TitleT;
  prices: Array<PriceT>;
  photos: Array<PhotoT>;
  description: DescriptionT;
  offerDiscount?: DiscountT;
};
