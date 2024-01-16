import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

import { CardImageProps } from '../../../../../../../types/screens/history';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../../../../../../../theme/theme';

const CardImage = ({
  name,
  special_ingredient,
  imagelink_square,
}: CardImageProps) => {
  return (
    <View style={styles.CardImageContainer}>
      <Image source={imagelink_square} style={styles.Image} />
      <View>
        <Text style={styles.CardTitle}>{name}</Text>
        <Text style={styles.CardSubtitle}>{special_ingredient}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  CardImageContainer: {
    flexDirection: 'row',
    gap: SPACING.space_20,
    alignItems: 'center',
  },
  Image: {
    width: 90,
    height: 90,
    borderRadius: BORDERRADIUS.radius_15,
  },
  CardTitle: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_18,
    color: COLORS.primaryWhiteHex,
  },
  CardSubtitle: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_12,
    color: COLORS.secondaryLightGreyHex,
  },
});

export default CardImage;
