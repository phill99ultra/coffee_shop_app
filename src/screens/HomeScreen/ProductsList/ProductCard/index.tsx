import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

import { ItemCardProps } from '../../../../types/screens/home';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../../../../theme/theme';

import CardImage from './CardImage';
import CardBottom from './CardBottom';
import LinearGradientContainer from '../../../../hoc/LinearGradient';

const ProductCard = ({
  name,
  imagelink_square,
  average_rating,
  special_ingredient,
  price,
  index,
  roasted,
  prices,
  id,
  type,
  navigation,
  buttonPressHandler,
}: ItemCardProps) => {
  return (
    <View style={styles.CardContainer}>
      <TouchableOpacity
        onPress={() => {
          navigation.push('Item', { index, id, type });
        }}>
        <LinearGradientContainer style={styles.CardLinearGradientContainer}>
          <CardImage
            imagelink_square={imagelink_square}
            average_rating={average_rating}
          />
          <Text style={styles.CardTitle}>{name}</Text>
          <Text style={styles.CardSubTitle}>{special_ingredient}</Text>
          <CardBottom
            id={id}
            index={index}
            name={name}
            price={price}
            roasted={roasted}
            imagelink_square={imagelink_square}
            special_ingredient={special_ingredient}
            prices={prices}
            type={type}
            buttonPressHandler={buttonPressHandler}
          />
        </LinearGradientContainer>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  CardContainer: {
    marginRight: SPACING.space_15,
  },
  CardLinearGradientContainer: {
    padding: SPACING.space_15,
    borderRadius: BORDERRADIUS.radius_20,
  },
  CardTitle: {
    fontFamily: FONTFAMILY.poppins_medium,
    color: COLORS.primaryWhiteHex,
    fontSize: FONTSIZE.size_16,
  },
  CardSubTitle: {
    fontFamily: FONTFAMILY.poppins_light,
    color: COLORS.primaryWhiteHex,
    fontSize: FONTSIZE.size_10,
  },
});

export default ProductCard;
