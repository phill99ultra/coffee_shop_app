import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

import { ProductCardProps } from '../../types';
import LinearGradient from 'react-native-linear-gradient';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../../theme/theme';
import CardImage from './CardImage';
import CardBottom from './CardBottom';

const ProductCard = ({
  name,
  imagelink_square,
  average_rating,
  special_ingredient,
  price,
}: ProductCardProps) => {
  return (
    <View style={styles.CardContainer}>
      <TouchableOpacity onPress={() => {}}>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.CardLinearGradientContainer}
          colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}>
          <CardImage
            imagelink_square={imagelink_square}
            average_rating={average_rating}
          />
          <Text style={styles.CardTitle}>{name}</Text>
          <Text style={styles.CardSubTitle}>{special_ingredient}</Text>
          <CardBottom price={price} />
        </LinearGradient>
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
