import { useStateStore } from '../../../hooks/useStateStore';

const useCart = () => {
  const {
    cartAmount,
    cartList,
    calculateCartPrice,
    decrementCartItemQuantity,
    incrementCartItemQuantity,
  } = useStateStore();

  return {
    cartAmount,
    cartList,
    calculateCartPrice,
    decrementCartItemQuantity,
    incrementCartItemQuantity,
  };
};

export default useCart;
