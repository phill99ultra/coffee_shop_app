import { ImageSourcePropType } from 'react-native';
import { DataType, TYPE } from '../../data';
import { ItemScreenNavigationProp } from '../../navigation';
import { HomeActionType } from '../../reducers';

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
  navigation: ItemScreenNavigationProp;
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

export type CardImageProps = {
  imagelink_square: ImageSourcePropType;
  average_rating: number;
};

export type CardBottomProps = {
  price: string;
};

export type BGIconProps = {
  name: string;
  color: string;
  size: number;
  backgroundColor: string;
};
