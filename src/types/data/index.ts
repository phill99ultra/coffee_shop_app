import { ImageProps } from 'react-native';

export enum TYPE {
  BEAN = 'Bean',
  COFFEE = 'Coffee',
}

export type PriceType = {
  size: string;
  price: string;
  currency: string;
  quantity?: number;
};

export type CartItemType = {
  id: string;
  index: number;
  name: string;
  roasted: string;
  imagelink_square: ImageProps;
  special_ingredient: string;
  type: TYPE;
  prices: PriceType[];
};

export type DataType = {
  description: string;
  imagelink_portrait: ImageProps;
  ingredients: string;
  average_rating: number;
  ratings_count: string;
  favourite: boolean;
  item_price?: string;
} & CartItemType;

export type CountMapType = {
  [key: string]: number;
};

export type AddToCart = {
  addToCart: (item: CartItemType) => void;
};

export type CalculateCart = {
  calculateCartPrice: () => void;
};

export type StoreType = {
  coffeeList: DataType[];
  beansList: DataType[];
  cartPrice: number;
  favouritesList: [];
  cartList: CartItemType[];
  orderHistoryList: [];
  addToFavouriteList: (type: string, id: string) => void;
  deleteFromFavouriteList: (type: string, id: string) => void;
  incrementCartItemTypeQuantity: (id: string, size: string) => void;
  decrementCartItemTypeQuantity: (id: string, size: string) => void;
  reset: () => void;
} & AddToCart &
  CalculateCart;
