import { ItemScreenNavigationProp, StoreType } from '../../../types';
import { useStore } from '../../../store';

const useItemDetails = () => {
  const addToFavouriteList = useStore(state => state.addToFavouriteList);
  const deleteFromFavouriteList = useStore(
    state => state.deleteFromFavouriteList,
  );

  function GetItemOfIndex(index: number, type: string) {
    const itemOfIndex = useStore((state: StoreType) =>
      type === 'Coffee' ? state.coffeeList : state.beansList,
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

  return { GetItemOfIndex, handleNavigateBack, handleToggleFavourite };
};

export default useItemDetails;
