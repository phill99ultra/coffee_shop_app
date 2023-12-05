import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import { ItemImageBottomProps } from '../../../../types';
import Properties from './Properties';
import RatingContainer from './RatingContainer';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../../../../theme/theme';

const ItemImageBottom = ({
  name,
  special_ingredient,
  type,
  ingredients,
  average_rating,
  ratings_count,
  roasted,
}: ItemImageBottomProps) => {
  return (
    <View style={styles.OuterContainer}>
      <View style={styles.InnerContainer}>
        <View style={styles.RowContainer}>
          <View>
            <Text style={styles.TitleText}>{name}</Text>
            <Text style={styles.SubtitleText}>{special_ingredient}</Text>
          </View>
          <Properties type={type} ingredients={ingredients} />
        </View>
        <View style={styles.RowContainer}>
          <RatingContainer
            average_rating={average_rating}
            ratings_count={ratings_count}
          />
          <View style={styles.RoastedContainer}>
            <Text style={styles.RoastedText}>{roasted}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  OuterContainer: {
    paddingVertical: SPACING.space_24,
    paddingHorizontal: SPACING.space_30,
    backgroundColor: COLORS.primaryBlackRGBA,
    borderTopLeftRadius: BORDERRADIUS.radius_40,
    borderTopRightRadius: BORDERRADIUS.radius_40,
  },
  InnerContainer: {
    justifyContent: 'space-between',
    gap: SPACING.space_15,
  },
  RowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  TitleText: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_24,
    color: COLORS.primaryWhiteHex,
  },
  SubtitleText: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_12,
    color: COLORS.primaryWhiteHex,
  },
  RoastedContainer: {
    width: 130,
    height: 55,
    borderRadius: BORDERRADIUS.radius_15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primaryBlackHex,
  },
  RoastedText: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_10,
    color: COLORS.primaryWhiteHex,
  },
});

export default ItemImageBottom;
