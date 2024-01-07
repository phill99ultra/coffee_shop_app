import { View, StyleSheet } from 'react-native';
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
        <View style={styles.ContentContainer}>
          <HeaderBar title="Favourites" />
          <FavouriteList
            list={favouriteList}
            navigation={navigation}
            handleToggleFavourite={handleToggleFavourite}
          />
        </View>
      </ContentContainer>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  ContentContainer: {
    flex: 1,
  },
});

export default FavoriteScreen;
