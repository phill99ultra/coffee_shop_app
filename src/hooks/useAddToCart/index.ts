import Toast from 'react-native-toast-message';

import { useStore } from '../../store';
import {
  ItemScreenNavigationProp,
  HomeScreenNavigationProp,
} from '../../types/navigation';
import { HandleAddToCartFunction } from '../../types/screens/item';

export const useAddToCart = () => {
  const addToCart = useStore(state => state.addToCart);
  const calculateCartPrice = useStore(state => state.calculateCartPrice);

  function handleNavigateToCart(
    navigation: ItemScreenNavigationProp | HomeScreenNavigationProp,
  ): () => void {
    return () => {
      navigation.navigate('Cart');
    };
  }

  function handleShowToast(produtName: string) {
    Toast.show({
      type: 'success',
      text1: produtName,
      text2: 'is Added to cart',
    });
  }

  const handleAddToCart: HandleAddToCartFunction = (
    {
      id,
      index,
      name,
      roasted,
      imagelink_square,
      special_ingredient,
      type,
      price,
    },
    navigation?: ItemScreenNavigationProp | HomeScreenNavigationProp,
  ) => {
    addToCart({
      id,
      index,
      name,
      roasted,
      imagelink_square,
      special_ingredient,
      type,
      prices: [{ ...price, quantity: 1 }],
    });
    calculateCartPrice();
    navigation ? handleNavigateToCart(navigation)() : handleShowToast(name);
  };

  return { handleAddToCart };
};
