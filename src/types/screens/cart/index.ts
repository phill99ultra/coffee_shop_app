import { CartItemType } from '../../data';
import { CartScreenNavigationProp } from '../../navigation';

export type EmptyListProps = {
  title: string;
};

export type CartListProps = {
  list: CartItemType[];
  navigation: CartScreenNavigationProp;
  handleChangeQuantity: any;
};

export type CartItemInfoProps = {
  name: string;
  special_ingredient: string;
  roasted: string;
};

export type CartItemSizesProps = {
  id: string;
  size: string;
  currency: string;
  price: string;
  quantity?: number;
  fontSize: number;
  handleChangeQuantity: any;
};

export type CartSingleItemInfoProps = {
  name: string;
  special_ingredient: string;
} & CartItemSizesProps;

export type IncrementDecrementBtnProps = {
  id: string;
  size: string;
  iconName: string;
  handleChangeQuantity: (id: string, size: string, type: string) => void;
};

export type CartListItemProps = {
  navigation: CartScreenNavigationProp;
  handleChangeQuantity: any;
} & CartItemType;
