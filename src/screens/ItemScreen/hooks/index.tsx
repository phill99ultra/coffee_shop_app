import { ItemScreenNavigationProp } from '../../../types/navigation';
import { useStateStore } from '../../../hooks/useStateStore';

const useItemDetails = () => {
  const {
    addToFavouriteList,
    deleteFromFavouriteList,
    GetItemOfIndex: handleGetItemOfIndex,
  } = useStateStore();

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
    handleGetItemOfIndex,
    handleNavigateBack,
    handleToggleFavourite,
  };
};

export default useItemDetails;
