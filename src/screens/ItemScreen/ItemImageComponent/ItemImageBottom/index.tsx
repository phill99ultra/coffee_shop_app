import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import { ItemImageBottomProps } from '../../../../types';
import Properties from './Properties';
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
});

export default ItemImageBottom;
