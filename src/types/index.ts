import React from 'react';
import { ImageProps, ImageSourcePropType } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

// STYLES //
export interface Spacing {
  space_2: number;
  space_4: number;
  space_6: number;
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
  space_48: number;
  space_72: number;
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
  radius_40: number;
}

// NAVIGATION TYPES
export type RootStackParamList = {
  Tab: undefined;
  Home: undefined;
  Cart: undefined;
  Payment: undefined;
  Favorite: undefined;
  History: undefined;
  Item: {
    index: number;
    id: string;
    type: string;
  };
};

// NAVIGATION TYPES FOR SCREENS
type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;
type HomeScreenRouteProp = RouteProp<RootStackParamList, 'Home'>;

export type ItemScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Item'
>;
type ItemScreenRouteProp = RouteProp<RootStackParamList, 'Item'>;

export type CartScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Cart'
>;
type CartScreenRouteProp = RouteProp<RootStackParamList, 'Cart'>;

// TYPES IN SCREEN COMPONENTS
export type ItemScreenProps = {
  navigation: ItemScreenNavigationProp;
  route: ItemScreenRouteProp;
};

export type HomeScreenProps = {
  navigation: HomeScreenNavigationProp;
  route: HomeScreenRouteProp;
};

export type CartScreenProps = {
  navigation: CartScreenNavigationProp;
  route: CartScreenRouteProp;
};

export type TabType = {
  id: number;
  screenName: keyof RootStackParamList;
  iconName: string;
  screen: React.FC<any>;
};

// OTHER TYPES
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

export type StoreType = {
  coffeeList: DataType[];
  beansList: DataType[];
  cartAmount: number;
  favouritesList: [];
  cartList: [];
  orderHistoryList: [];
  addToFavouriteList: (type: string, id: string) => void;
  deleteFromFavouriteList: (type: string, id: string) => void;
  addToCart: (item: CartItem) => void;
  calculateCartPrice: () => void;
};

export type CountMapType = {
  [key: string]: number;
};

// TYPES FOR REDUCERS
export type HomeActionType =
  | { type: 'SET_CATEGORIES'; payload: string[] }
  | { type: 'SET_SEARCH_TEXT'; payload: string }
  | { type: 'SET_CATEGORY_INDEX'; payload: { index: number; category: string } }
  | { type: 'SET_SORTED_COFFEE'; payload: DataType[] };

export type ItemActionType =
  | { type: 'SET_FULL_DESCRIPTION'; payload: boolean }
  | { type: 'SET_PRICE'; payload: PriceType };

export type InitialHomeStateType = {
  categories: string[];
  searchText: string;
  categoryIndex: { index: number; category: string };
  sortedCoffee: DataType[];
};

export type InitialItemStateType = {
  fullDescription: boolean;
  price: PriceType;
};

// TYPES FOR PROPS //
export type SearchInputProps = {
  searchText: string;
  dispatch: React.Dispatch<HomeActionType>;
  searchCoffee: (search: string) => void;
  resetSearchCoffee: () => void;
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
  listRef: any;
  categories: string[];
  categoryIndex: number;
  coffeeList: DataType[];
  dispatch: React.Dispatch<HomeActionType>;
};

export type ItemCardProps = {
  id: string;
  index: number;
  type: TYPE;
  roasted: string;
  imagelink_square: ImageSourcePropType;
  name: string;
  average_rating: number;
  special_ingredient: string;
  ratings_count: string;
  price: string;
  buttonPressHandler: any;
  navigation: ItemScreenNavigationProp;
};

export type BGIconProps = {
  name: string;
  color: string;
  size: number;
  backgroundColor: string;
};

export type CardImageProps = {
  imagelink_square: ImageSourcePropType;
  average_rating: number;
};

export type CardBottomProps = {
  price: string;
};

export type ProductsListProps = {
  listRef?: any;
  products: DataType[];
  topBarHeight?: number;
  coffee?: boolean;
  navigation: ItemScreenNavigationProp;
};

export type SearchResultProps = {
  resetSearchCoffee: () => void;
};

export type ItemImageBtnsProps = {
  enableBackHandler: boolean;
  favourite: boolean;
  type: TYPE;
  id: string;
  handleBackHandler: () => void;
  handleToggleFavourite: (favourite: boolean, type: string, id: string) => void;
};

type IconType = {
  bean: string;
  beans: string;
};

export type PropertyProps = {
  type: TYPE;
  propertyText: string | TYPE;
  size: number;
  dynamicMarginTop: number;
  iconType: IconType;
};

export type ProprertiesProps = {
  type: TYPE;
  ingredients: string;
};

export type RatingProps = {
  average_rating: number;
  ratings_count: string;
};

export type ItemImageBottomProps = {
  name: string;
  special_ingredient: string;
  roasted: string;
} & ProprertiesProps &
  RatingProps;

export type ItemImageProps = {
  imagelink_portrait: ImageProps;
  ingredients: string;
  name: string;
  special_ingredient: string;
  average_rating: number;
  ratings_count: string;
  roasted: string;
} & ItemImageBtnsProps;

export type DescriptionProps = {
  fullDescription: boolean;
  description: string;
  dispatch: React.Dispatch<ItemActionType>;
};

export type SizeProps = {
  prices: PriceType[];
  type: TYPE;
  itemPrice: PriceType;
  dispatch: React.Dispatch<ItemActionType>;
};

export type PriceProps = {
  type: TYPE;
  size: string;
  price: string;
  currency: string;
  itemPrice: PriceType;
  dispatch: React.Dispatch<ItemActionType>;
};

export type ItemInfoAreaProps = {
  prices: PriceType[];
  type: TYPE;
  itemPrice: PriceType;
  dispatch: React.Dispatch<ItemActionType>;
} & DescriptionProps;

type ItemToCart = {
  id: string;
  index: number;
  name: string;
  roasted: string;
  imagelink_square: ImageProps;
  special_ingredient: string;
  type: TYPE;
  price: PriceType;
};

export type HandleAddToCartFunction = (
  item: ItemToCart,
  navigation: ItemScreenNavigationProp,
) => void;

export type ItemPaymentProps = {
  itemPrice: string;
  currency: string;
  title: string;
  handleAddToCart: () => void;
};
