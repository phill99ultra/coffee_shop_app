import { useStateStore } from '../../../hooks/useStateStore';
import { useToggleFavourite } from '../../../hooks/useToggleFavourite';

const useFavorite = () => {
  const { favouriteList } = useStateStore();
  const { handleToggleFavourite } = useToggleFavourite();

  return { favouriteList, handleToggleFavourite };
};

export default useFavorite;
