import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

import { FavouriteItemProps } from '../../../../types/screens/favourite';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../../../../theme/theme';

import ImageBackgroundInfo from '../../../../components/ImageBackgroundInfo';
import LinearGradientContainer from '../../../../hoc/LinearGradient';

const FavouriteItem = ({
  navigation,
  id,
  index,
  name,
  type,
  description,
  imagelink_portrait,
  roasted,
  favourite,
  average_rating,
  ingredients,
  ratings_count,
  special_ingredient,
  handleToggleFavourite,
}: FavouriteItemProps) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.push('Item', { index, id, type });
      }}>
      <View style={styles.ItemContainer}>
        <ImageBackgroundInfo
          id={id}
          type={type}
          name={name}
          favourite={favourite}
          imagelink_portrait={imagelink_portrait}
          special_ingredient={special_ingredient}
          roasted={roasted}
          ingredients={ingredients}
          average_rating={average_rating}
          ratings_count={ratings_count}
          enableBackHandler={false}
          handleToggleFavourite={handleToggleFavourite}
        />
        <LinearGradientContainer style={styles.LinearGradientContainer}>
          <Text style={styles.DescriptionTitle}>Description:</Text>
          <Text style={styles.DescriptionText}>{description}</Text>
        </LinearGradientContainer>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  ItemContainer: {
    borderRadius: BORDERRADIUS.radius_25,
    overflow: 'hidden',
  },
  LinearGradientContainer: {
    gap: SPACING.space_10,
    padding: SPACING.space_20,
  },
  DescriptionTitle: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_16,
    color: COLORS.secondaryLightGreyHex,
  },
  DescriptionText: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_14,
    color: COLORS.primaryWhiteHex,
  },
});

export default FavouriteItem;
