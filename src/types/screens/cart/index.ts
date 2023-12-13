import { CartItemType } from '../../data';

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

export type CartListItemProps = CartItemType;
