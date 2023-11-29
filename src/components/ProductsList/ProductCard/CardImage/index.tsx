import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';

import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../../../../theme/theme';
import CustomIcon from '../../../CustomIcon';
import { CardImageProps } from '../../../../types';

const CARD_WIDTH = Dimensions.get('window').width * 0.32;

const CardImage = ({ imagelink_square, average_rating }: CardImageProps) => {
  return (
    <ImageBackground
      source={imagelink_square}
      style={styles.CardImageBackground}
      resizeMode="cover">
      <View style={styles.CardRatingContainer}>
        <CustomIcon
          name="star"
          color={COLORS.primaryOrangeHex}
          size={FONTSIZE.size_16}
        />
        <Text style={styles.CardRatingText}>{average_rating}</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  CardImageBackground: {
    width: CARD_WIDTH,
    height: CARD_WIDTH,
    borderRadius: BORDERRADIUS.radius_15,
    marginBottom: SPACING.space_15,
    overflow: 'hidden',
  },
  CardRatingContainer: {
    flexDirection: 'row',
    backgroundColor: COLORS.primaryBlackRGBA,
    alignItems: 'center',
    justifyContent: 'center',
    gap: SPACING.space_10,
    paddingHorizontal: SPACING.space_15,
    position: 'absolute',
    borderBottomLeftRadius: BORDERRADIUS.radius_15,
    borderTopRightRadius: BORDERRADIUS.radius_15,
    top: 0,
    right: 0,
  },
  CardRatingText: {
    fontFamily: FONTFAMILY.poppins_medium,
    color: COLORS.primaryWhiteHex,
    fontSize: FONTSIZE.size_14,
    lineHeight: 22,
  },
});

export default CardImage;
