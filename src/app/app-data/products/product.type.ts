export type ProductT = {
    id: string;
    title: string;
    prices: { [tag: string]: number };
    photos: string[];
    description: string;
  };
  
  export type ProductIdT = Pick<ProductT, 'id' | 'title'>;