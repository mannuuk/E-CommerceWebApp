export type PRODUCT_ITEM_TYPES = {
  brand: string;
  category: string;
  color: string;
  description: string;
  discount: number;
  id: number;
  image: string;
  model: string;
  price: number;
  title: string;
};

export type GET_PRODUCT_LIST_RESPONSE = {
  message: string;
  products: Array<PRODUCT_ITEM_TYPES>;
  status: string;
};
