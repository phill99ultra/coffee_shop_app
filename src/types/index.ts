import React from 'react';

export type TabType = {
  screenName: string;
  iconName: string;
  screen: () => React.JSX.Element;
};

type PriceType = {
  size: string;
  price: string;
  currency: string;
};

export type DataType = {
  id: string;
  name: string;
  description: string;
  roasted: string;
  imagelink_square: any;
  imagelink_portrait: any;
  ingredients: string;
  special_ingredient: string;
  prices: PriceType[];
  average_rating: number;
  ratings_count: string;
  favourite: boolean;
  type: string;
  index: number;
};

export type StoreType = {
  coffeeList: DataType[];
  beansList: DataType[];
  cartAmount: number;
  favoritesList: [];
  cartList: [];
  orderHistoryList: [];
};
