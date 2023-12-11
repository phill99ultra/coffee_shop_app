import { ImageProps } from 'react-native';
import { DataType, PriceType, TYPE } from '../../data';
import { HomeScreenNavigationProp } from '../../navigation';
import { HomeActionType } from '../../reducers';
import { HandleAddToCartFunction } from '../item';

export type SearchInputProps = {
  searchText: string;
  dispatch: React.Dispatch<HomeActionType>;
  searchCoffee: (search: string) => void;
  resetSearchCoffee: () => void;
};

export type SearchResultProps = {
  resetSearchCoffee: () => void;
};

export type CategoriesNavigatorProps = {
  listRef: any;
  categories: string[];
  categoryIndex: number;
  coffeeList: DataType[];
  dispatch: React.Dispatch<HomeActionType>;
};

export type ProductsListProps = {
  listRef?: any;
  products: DataType[];
  topBarHeight?: number;
  coffee?: boolean;
  navigation: HomeScreenNavigationProp;
  handleAddToCart: HandleAddToCartFunction;
};

export type CardBottomProps = {
  id: string;
  index: number;
  name: string;
  roasted: string;
  imagelink_square: ImageProps;
  special_ingredient: string;
  price: string;
  type: TYPE;
  prices: PriceType;
  buttonPressHandler: HandleAddToCartFunction;
};

export type ItemCardProps = {
  average_rating: number;
  navigation: HomeScreenNavigationProp;
} & CardBottomProps;

export type CardImageProps = {
  imagelink_square: ImageProps;
  average_rating: number;
};

export type BGIconProps = {
  name: string;
  color: string;
  size: number;
  backgroundColor: string;
};
