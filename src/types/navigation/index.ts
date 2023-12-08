import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

// NAVIGATION TYPES
export type RootStackParamList = {
  Tab: undefined;
  Home: undefined;
  Cart: undefined;
  Payment: undefined;
  Favorite: undefined;
  History: undefined;
  Item: {
    index: number;
    id: string;
    type: string;
  };
};

// NAVIGATION TYPES FOR SCREENS
type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;
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

export type TabType = {
  id: number;
  screenName: keyof RootStackParamList;
  iconName: string;
  screen: React.FC<any>;
};
