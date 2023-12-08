import { ItemScreenNavigationProp } from '../../../types/navigation';
import { StoreType } from '../../../types/data';
import { useStore } from '../../../store';

const useItemDetails = () => {
  const addToFavouriteList = useStore(state => state.addToFavouriteList);
  const deleteFromFavouriteList = useStore(
    state => state.deleteFromFavouriteList,
  );

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

  const handleToggleFavourite = (
    favourite: boolean,
    type: string,
    id: string,
  ) => {
    favourite
      ? deleteFromFavouriteList(type, id)
      : addToFavouriteList(type, id);
  };

  return {
    GetItemOfIndex,
    handleNavigateBack,
    handleToggleFavourite,
  };
};

export default useItemDetails;
