import { CartItemType, TYPE } from '../../data';

export type EmptyListProps = {
  title: string;
};

export type CartListProps = {
  list: CartItemType[];
};

export type CartItemInfoProps = {
  name: string;
  special_ingredient: string;
  roasted: string;
};

export type CartItemSizesProps = {
  size: string;
  type: TYPE;
  currency: string;
  price: string;
};

export type CartListItemProps = CartItemType;
