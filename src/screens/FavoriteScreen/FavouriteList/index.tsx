import React from 'react';

import { FavouriteListProps } from '../../../types/screens/favourite';

import FavouriteItem from './FavouriteItem';
import ListContainer from '../../../hoc/ListContainer';

const FavouriteList = ({
  navigation,
  list,
  handleToggleFavourite,
}: FavouriteListProps) => {
  return (
    <ListContainer listLength={list.length} emptyText="No Favourites">
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
          special_portrait={item.special_portrait}
          special_ingredient={item.special_ingredient}
          ingredients={item.ingredients}
          imagelink_portrait={item.imagelink_portrait}
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
