import { useStateStore } from '../../../hooks/useStateStore';
import { CartScreenNavigationProp } from '../../../types/navigation';

const useCart = () => {
  const {
    cartPrice,
    cartList,
    calculateCartPrice,
    decrementCartItemQuantity,
    incrementCartItemQuantity,
  } = useStateStore();

  function handleNavigateToPayment(navigation: CartScreenNavigationProp) {
    navigation.navigate('Payment');
  }

  function handleChangeQuantity(id: string, size: string, type: string) {
    type === 'minus' && decrementCartItemQuantity(id, size);
    type === 'add' && incrementCartItemQuantity(id, size);
    calculateCartPrice();
  }

  return {
    cartPrice,
    cartList,
    handleNavigateToPayment,
    handleChangeQuantity,
  };
};

export default useCart;
