import { useStateStore } from '../useStateStore';

export const useToggleFavourite = () => {
  const { addToFavouriteList, deleteFromFavouriteList } = useStateStore();

  const handleToggleFavourite = (
    favourite: boolean,
    type: string,
    id: string,
  ) => {
    favourite
      ? deleteFromFavouriteList(type, id)
      : addToFavouriteList(type, id);
  };

  return { handleToggleFavourite };
};
