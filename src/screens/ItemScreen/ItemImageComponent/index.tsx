import { StyleSheet, View, ImageBackground } from 'react-native';
import React from 'react';

import { ItemImageProps } from '../../../types';
import ItemImageBtns from './ItemImageBtns';
import ItemImageBottom from './ItemImageBottom';

const ItemImageComponent = ({
  enableBackHandler,
  imagelink_portrait,
  type,
  id,
  favourite,
  name,
  special_ingredient,
  ingredients,
  average_rating,
  ratings_count,
  roasted,
  handleBackHandler,
  handleToggleFavourite,
}: ItemImageProps) => {
  return (
    <View>
      <ImageBackground
        style={styles.ItemBackgroundImage}
        source={imagelink_portrait}>
        <ItemImageBtns
          enableBackHandler={enableBackHandler}
          favourite={favourite}
          type={type}
          id={id}
          handleBackHandler={handleBackHandler}
          handleToggleFavourite={handleToggleFavourite}
        />
        <ItemImageBottom
          name={name}
          special_ingredient={special_ingredient}
          ingredients={ingredients}
          type={type}
        />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  ItemBackgroundImage: {
    width: '100%',
    aspectRatio: 20 / 25,
    justifyContent: 'space-between',
  },
});

export default ItemImageComponent;
