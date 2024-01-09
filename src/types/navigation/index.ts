import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

// NAVIGATION TYPES
export type RootStackParamList = {
  Tab: undefined;
  Home: {
    index: number;
    id: string;
    type: string;
  };
  Cart:
    | {
        index: number;
        id: string;
        type: string;
      }
    | undefined;
  Payment: {
    amount: number;
  };
  Favorite: {
    index: number;
    id: string;
    type: string;
  };
  History: undefined;
  Item: {
    index: number;
    id: string;
    type: string;
  };
};

// NAVIGATION TYPES FOR SCREENS
export type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Home'
>;
type HomeScreenRouteProp = RouteProp<RootStackParamList, 'Home'>;

export type ItemScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Item'
>;
type ItemScreenRouteProp = RouteProp<RootStackParamList, 'Item'>;

export type CartScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Cart'
>;
type CartScreenRouteProp = RouteProp<RootStackParamList, 'Cart'>;

export type FavoriteScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Favorite'
>;
type FavoriteScreenRouteProp = RouteProp<RootStackParamList, 'Favorite'>;

export type PaymentScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Payment'
>;
type PaymentScreenRouteProp = RouteProp<RootStackParamList, 'Payment'>;

// TYPES IN SCREEN COMPONENTS
export type ItemScreenProps = {
  navigation: ItemScreenNavigationProp;
  route: ItemScreenRouteProp;
};

export type HomeScreenProps = {
  navigation: HomeScreenNavigationProp;
  route: HomeScreenRouteProp;
};

export type CartScreenProps = {
  navigation: CartScreenNavigationProp;
  route: CartScreenRouteProp;
};

export type FavoriteScreenProps = {
  navigation: FavoriteScreenNavigationProp;
  route: FavoriteScreenRouteProp;
};

export type PaymentScreenProps = {
  navigation: PaymentScreenNavigationProp;
  route: PaymentScreenRouteProp;
};

export type TabType = {
  id: number;
  screenName: keyof RootStackParamList;
  iconName: string;
  screen: React.FC<any>;
};
