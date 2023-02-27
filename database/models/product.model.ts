interface TProductId {
  [keyof: string]: TProduct;
}

export interface TProduct {
  name: string;
  id: string;
  sku: string;
  price: number;
  image: string;
  attributes: {
    description: string;
    shape: string;
    hardiness: string;
    taste: string;
  };
}
