import { ImageProps } from 'react-native';

import { DataType, OrderType, PriceType, TYPE } from '../../data';
import { HistoryScreenNavigationProp } from '../../navigation';

export type OrderHistoryListProps = {
  ordersList: OrderType[];
  navigation: HistoryScreenNavigationProp;
};

export type HeaderCardProps = {
  orderDate: string;
  orderTotal: string;
};

export type OrderListProps = {
  orderList: DataType[];
  navigation: HistoryScreenNavigationProp;
};

export type OrderHistoryItemProps = HeaderCardProps & OrderListProps;

export type CardImageProps = {
  name: string;
  special_ingredient: string;
  imagelink_square: ImageProps;
};

export type OrderItemProps = {
  id: string;
  index: number;
  type: TYPE;
  prices: PriceType[];
  item_price?: string;
  navigation: HistoryScreenNavigationProp;
} & CardImageProps;

export type CardPriceProps = {
  type: TYPE;
} & PriceType;

export type CardSizeProps = {
  type: TYPE;
  size: string;
};

export type CardPriceBoxProps = {
  price: string;
  currency: string;
};

export type DownloadButtonProps = {
  handlePress: () => void;
};
