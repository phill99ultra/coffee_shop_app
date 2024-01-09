import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
import OrderHistoryScreen from '../screens/OrderHistoryScreen';
import { TabType } from '../types/navigation';
import { PaymentListType } from '../types';

export const TAB_VALUES: TabType[] = [
  {
    id: 1,
    screenName: 'Home',
    iconName: 'home',
    screen: HomeScreen,
  },
  {
    id: 2,
    screenName: 'Cart',
    iconName: 'cart',
    screen: CartScreen,
  },
  {
    id: 3,
    screenName: 'Favorite',
    iconName: 'like',
    screen: FavoriteScreen,
  },
  {
    id: 4,
    screenName: 'History',
    iconName: 'bell',
    screen: OrderHistoryScreen,
  },
];

export const PAYMENT_LIST: PaymentListType[] = [
  {
    name: 'Wallet',
    icon: 'icon',
    isIcon: true,
  },
  {
    name: 'Google Pay',
    icon: require('../assets/app_images/gpay.png'),
    isIcon: false,
  },
  {
    name: 'Apple Pay',
    icon: require('../assets/app_images/applepay.png'),
    isIcon: false,
  },
  {
    name: 'Amazon Pay',
    icon: require('../assets/app_images/amazonpay.png'),
    isIcon: false,
  },
];
