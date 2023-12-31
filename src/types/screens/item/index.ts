import { ImageProps } from 'react-native';

import { PriceType, TYPE } from '../../data';
import { ItemActionType } from '../../reducers';
import {
  ItemScreenNavigationProp,
  HomeScreenNavigationProp,
} from '../../navigation';
import { FavouriteToggleType } from '../..';

export type ImageBtnsProps = {
  enableBackHandler: boolean;
  favourite: boolean;
  type: TYPE;
  id: string;
  handleBackHandler?: () => void;
};

export type ItemImageBtnsProps = FavouriteToggleType & ImageBtnsProps;

export type ImageBackgroundInfoProps = {
  imagelink_portrait: ImageProps;
  ingredients: string;
  name: string;
  special_ingredient: string;
  average_rating: number;
  ratings_count: string;
  roasted: string;
  handleToggleFavourite: any;
} & ImageBtnsProps;

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

export type DescriptionProps = {
  fullDescription: boolean;
  description: string;
  dispatch: React.Dispatch<ItemActionType>;
};

export type ItemInfoAreaProps = {
  prices: PriceType[];
  type: TYPE;
  itemPrice: PriceType;
  dispatch: React.Dispatch<ItemActionType>;
} & DescriptionProps;

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
  navigation?: ItemScreenNavigationProp | HomeScreenNavigationProp,
) => void;
