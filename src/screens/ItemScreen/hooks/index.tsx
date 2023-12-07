import {
  ItemScreenNavigationProp,
  StoreType,
  HandleAddToCartFunction,
} from '../../../types';
import { useStore } from '../../../store';

const useItemDetails = () => {
  const addToFavouriteList = useStore(state => state.addToFavouriteList);
  const deleteFromFavouriteList = useStore(
    state => state.deleteFromFavouriteList,
  );
  const addToCart = useStore(state => state.addToCart);
  const calculateCartPrice = useStore(state => state.calculateCartPrice);

  // Had to rename state to store to avoid warning with state declared in useReducer hook below
  function GetItemOfIndex(index: number, type: string) {
    const itemOfIndex = useStore((store: StoreType) =>
      type === 'Coffee' ? store.coffeeList : store.beansList,
    )[index];

    return itemOfIndex;
  }

  function handleNavigateBack(
    navigation: ItemScreenNavigationProp,
  ): () => void {
    return () => {
      navigation.pop();
    };
  }

  function handleNavigateToCart(
    navigation: ItemScreenNavigationProp,
  ): () => void {
    return () => {
      navigation.navigate('Cart');
    };
  }

  const handleToggleFavourite = (
    favourite: boolean,
    type: string,
    id: string,
  ) => {
    favourite
      ? deleteFromFavouriteList(type, id)
      : addToFavouriteList(type, id);
  };

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

  return {
    GetItemOfIndex,
    handleNavigateBack,
    handleToggleFavourite,
    handleAddToCart,
  };
};

export default useItemDetails;
