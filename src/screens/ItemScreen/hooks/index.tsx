import { ItemScreenNavigationProp } from '../../../types/navigation';
import { useStateStore } from '../../../hooks/useStateStore';
import { useToggleFavourite } from '../../../hooks/useToggleFavourite';

const useItem = () => {
  const { GetItemOfIndex: handleGetItemOfIndex } = useStateStore();

  const { handleToggleFavourite } = useToggleFavourite();

  function handleNavigateBack(
    navigation: ItemScreenNavigationProp,
  ): () => void {
    return () => {
      navigation.pop();
    };
  }

  return {
    handleGetItemOfIndex,
    handleNavigateBack,
    handleToggleFavourite,
  };
};

export default useItem;
