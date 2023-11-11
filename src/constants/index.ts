import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
import OrderHistoryScreen from '../screens/OrderHistoryScreen';
import {TabType} from '../types';

export const TAB_VALUES: TabType[] = [
  {
    screenName: 'Home',
    iconName: 'home',
    screen: HomeScreen,
  },
  {
    screenName: 'Cart',
    iconName: 'cart',
    screen: CartScreen,
  },
  {
    screenName: 'Favorite',
    iconName: 'like',
    screen: FavoriteScreen,
  },
  {
    screenName: 'History',
    iconName: 'bell',
    screen: OrderHistoryScreen,
  },
];
