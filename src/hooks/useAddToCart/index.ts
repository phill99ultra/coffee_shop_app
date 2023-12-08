import { useStore } from '../../store';
import { ItemScreenNavigationProp } from '../../types/navigation';
import { HandleAddToCartFunction } from '../../types/screens/item';

export const useAddToCart = () => {
  const addToCart = useStore(state => state.addToCart);
  const calculateCartPrice = useStore(state => state.calculateCartPrice);

  function handleNavigateToCart(
    navigation: ItemScreenNavigationProp,
  ): () => void {
    return () => {
      navigation.navigate('Cart');
    };
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
    navigation: ItemScreenNavigationProp,
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
    handleNavigateToCart(navigation)();
  };

  return { handleAddToCart };
};
