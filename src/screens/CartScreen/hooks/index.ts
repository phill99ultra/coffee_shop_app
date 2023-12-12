import { useStateStore } from '../../../hooks/useStateStore';
import { CartScreenNavigationProp } from '../../../types/navigation';

const useCart = () => {
  const {
    cartPrice,
    cartList,
    calculateCartPrice,
    decrementCartItemQuantity,
    incrementCartItemQuantity,
    reset,
  } = useStateStore();

  function handleNavigateToPayment(navigation: CartScreenNavigationProp) {
    navigation.navigate('Payment');
  }

  return {
    cartPrice,
    cartList,
    handleNavigateToPayment,
    calculateCartPrice,
    decrementCartItemQuantity,
    incrementCartItemQuantity,
    reset,
  };
};

export default useCart;
