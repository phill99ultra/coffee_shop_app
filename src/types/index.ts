import React from 'react';

// STYLES //
export interface Spacing {
  space_2: number;
  space_4: number;
  space_8: number;
  space_10: number;
  space_12: number;
  space_15: number;
  space_16: number;
  space_18: number;
  space_20: number;
  space_24: number;
  space_28: number;
  space_30: number;
  space_32: number;
  space_36: number;
}

export interface Color {
  primaryRedHex: string;
  primaryOrangeHex: string;
  primaryBlackHex: string;
  primaryDarkGreyHex: string;
  secondaryDarkGreyHex: string;
  primaryGreyHex: string;
  secondaryGreyHex: string;
  primaryLightGreyHex: string;
  secondaryLightGreyHex: string;
  primaryWhiteHex: string;
  primaryBlackRGBA: string;
  secondaryBlackRGBA: string;
}

export interface FontFamily {
  poppins_black: string;
  poppins_bold: string;
  poppins_extrabold: string;
  poppins_extralight: string;
  poppins_light: string;
  poppins_medium: string;
  poppins_regular: string;
  poppins_semibold: string;
  poppins_thin: string;
}

export interface FontSize {
  size_8: number;
  size_10: number;
  size_12: number;
  size_14: number;
  size_16: number;
  size_18: number;
  size_20: number;
  size_24: number;
  size_28: number;
  size_30: number;
}

export interface BorderRadius {
  radius_4: number;
  radius_8: number;
  radius_10: number;
  radius_12: number;
  radius_15: number;
  radius_20: number;
  radius_25: number;
}

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

export type HomeActionType =
  | { type: 'SET_CATEGORIES'; payload: string[] }
  | { type: 'SET_SEARCH_TEXT'; payload: string }
  | { type: 'SET_CATEGORY_INDEX'; payload: { index: number; category: string } }
  | { type: 'SET_SORTED_COFFEE'; payload: DataType[] };

export type InitialStateType = {
  categories: string[];
  searchText: string;
  categoryIndex: { index: number; category: string };
  sortedCoffee: DataType[];
};

// PROPS //

export type SearchInputProps = {
  searchText: string;
  dispatch: React.Dispatch<HomeActionType>;
};

export type HeaderBarProps = {
  title?: string;
};

export type GradientIconProps = {
  name: string;
  color: string;
  size: number;
};

export type CategoriesNavigatorProps = {
  categories: string[];
  categoryIndex: number;
  coffeeList: DataType[];
  dispatch: React.Dispatch<HomeActionType>;
};
