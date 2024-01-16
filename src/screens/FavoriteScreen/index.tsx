import React from 'react';

import { FavoriteScreenProps } from '../../types/navigation';

import HeaderBar from '../../components/HeaderBar';
import FavouriteList from './FavouriteList';
import ScreenContainer from '../../hoc/ScreenContainer';
import ContentContainer from '../../hoc/ContentContainer';

import useFavorite from './hooks';

function FavoriteScreen({ navigation }: FavoriteScreenProps) {
  const { favouriteList, handleToggleFavourite } = useFavorite();
  return (
    <ScreenContainer>
      <ContentContainer>
        <HeaderBar title="Favourites" />
        <FavouriteList
          list={favouriteList}
          navigation={navigation}
          handleToggleFavourite={handleToggleFavourite}
        />
      </ContentContainer>
    </ScreenContainer>
  );
}

export default FavoriteScreen;
