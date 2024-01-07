import { StoreType } from '../../types/data';
import { useStore } from '../../store';

export const useStateStore = () => {
  const beansList = useStore(state => state.beansList);
  const cartPrice = useStore(state => state.cartPrice);
  const cartList = useStore(state => state.cartList);
  const coffeeList = useStore(state => state.coffeeList);
  const favouriteList = useStore(state => state.favouritesList);
  const addToCart = useStore(state => state.addToCart);
  const addToFavouriteList = useStore(state => state.addToFavouriteList);
  const calculateCartPrice = useStore(state => state.calculateCartPrice);
  const deleteFromFavouriteList = useStore(
    state => state.deleteFromFavouriteList,
  );
  const incrementCartItemQuantity = useStore(
    state => state.incrementCartItemQuantity,
  );
  const decrementCartItemQuantity = useStore(
    state => state.decrementCartItemQuantity,
  );

  function GetItemOfIndex(index: number, type: string) {
    const itemOfIndex = useStore((state: StoreType) =>
      type === 'Coffee' ? state.coffeeList : state.beansList,
    )[index];

    return itemOfIndex;
  }

  return {
    beansList,
    cartPrice,
    cartList,
    coffeeList,
    favouriteList,
    addToCart,
    addToFavouriteList,
    calculateCartPrice,
    decrementCartItemQuantity,
    deleteFromFavouriteList,
    GetItemOfIndex,
    incrementCartItemQuantity,
  };
};
