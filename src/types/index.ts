import React from 'react';

export type TabType = {
  id: number;
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

export type CountMapType = {
  [key: string]: number;
};

export type HeaderType = {
  title?: string;
};

export type GradientIconType = {
  name: string;
  color: string;
  size: number;
};

export type HomeActionType =
  | { type: 'SET_CATEGORIES'; payload: string[] }
  | { type: 'SET_SEARCH_TEXT'; payload: string }
  | { type: 'SET_CATEGORY_INDEX'; payload: { index: number; category: string } }
  | { type: 'SET_SORTED_COFFEE'; payload: string[] };

export type InitialStateType = {
  categories: string[];
  searchText: string;
  categoryIndex: { index: number; category: string };
  sortedCoffee: DataType[];
};
