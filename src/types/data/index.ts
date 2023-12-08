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

export type DataType = {
  id: string;
  name: string;
  description: string;
  roasted: string;
  imagelink_square: ImageProps;
  imagelink_portrait: ImageProps;
  ingredients: string;
  special_ingredient: string;
  prices: PriceType[];
  average_rating: number;
  ratings_count: string;
  favourite: boolean;
  type: TYPE;
  index: number;
  item_price?: string;
};

export type CartItem = {
  id: string;
  index: number;
  name: string;
  roasted: string;
  imagelink_square: ImageProps;
  special_ingredient: string;
  type: TYPE;
  prices: PriceType[];
};

export type CountMapType = {
  [key: string]: number;
};

export type AddToCart = {
  addToCart: (item: CartItem) => void;
};

export type CalculateCart = {
  calculateCartPrice: () => void;
};

export type StoreType = {
  coffeeList: DataType[];
  beansList: DataType[];
  cartAmount: number;
  favouritesList: [];
  cartList: [];
  orderHistoryList: [];
  addToFavouriteList: (type: string, id: string) => void;
  deleteFromFavouriteList: (type: string, id: string) => void;
} & AddToCart &
  CalculateCart;
