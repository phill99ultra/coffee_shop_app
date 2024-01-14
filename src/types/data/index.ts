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

export type FavouriteItemType = {
  id: string;
  index: number;
  name: string;
  average_rating: number;
  ratings_count: string;
  roasted: string;
  description: string;
  special_portrait: string;
  imagelink_square: ImageProps;
  ingredients: string;
  imagelink_portrait: ImageProps;
  special_ingredient: string;
  type: TYPE;
  favourite: boolean;
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
  incrementCartItemQuantity: (id: string, size: string) => void;
  decrementCartItemQuantity: (id: string, size: string) => void;
  addToOrderHistoryList: () => void;
} & AddToCart &
  CalculateCart;
