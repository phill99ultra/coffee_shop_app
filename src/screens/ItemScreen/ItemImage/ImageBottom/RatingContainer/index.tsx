import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import CustomIcon from '../../../../../components/CustomIcon';
import {
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../../../../../theme/theme';
import { RatingProps } from '../../../../../types';

const RatingContainer = ({ average_rating, ratings_count }: RatingProps) => {
  return (
    <View style={styles.RatingContainer}>
      <CustomIcon
        name="star"
        color={COLORS.primaryOrangeHex}
        size={FONTSIZE.size_20}
      />
      <Text style={styles.RatingText}>{average_rating}</Text>
      <Text style={styles.RatingCountText}>({ratings_count})</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  RatingContainer: {
    flexDirection: 'row',
    gap: SPACING.space_10,
    alignItems: 'center',
  },
  RatingText: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_18,
    color: COLORS.primaryWhiteHex,
  },
  RatingCountText: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_12,
    color: COLORS.primaryWhiteHex,
  },
});

export default RatingContainer;
