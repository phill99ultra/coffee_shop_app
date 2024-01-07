import React from 'react';

import { FavouriteListProps } from '../../../types/screens/favourite';
import EmptyList from '../../../components/EmptyList';
import FavouriteItem from './FavouriteItem';
import ListContainer from '../../../hoc/ListContainer';

const FavouriteList = ({
  navigation,
  list,
  handleToggleFavourite,
}: FavouriteListProps) => {
  if (list.length === 0) {
    return <EmptyList title="No Favourites" />;
  }

  return (
    <ListContainer>
      {list.map(item => (
        <FavouriteItem
          key={item.id}
          id={item.id}
          index={item.index}
          name={item.name}
          average_rating={item.average_rating}
          ratings_count={item.ratings_count}
          roasted={item.roasted}
          description={item.description}
          special_ingredient={item.special_ingredient}
          imagelink_square={item.imagelink_square}
          type={item.type}
          favourite={item.favourite}
          navigation={navigation}
          handleToggleFavourite={handleToggleFavourite}
        />
      ))}
    </ListContainer>
  );
};

export default FavouriteList;
