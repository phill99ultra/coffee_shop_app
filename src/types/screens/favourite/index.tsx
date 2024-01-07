import { FavouriteItemType } from '../../data';
import { FavoriteScreenNavigationProp } from '../../navigation';

export type FavouriteListProps = {
  navigation: FavoriteScreenNavigationProp;
  list: FavouriteItemType[];
  handleToggleFavourite: any;
};

export type FavouriteItemProps = {
  navigation: FavoriteScreenNavigationProp;
  handleToggleFavourite: any;
} & FavouriteItemType;
