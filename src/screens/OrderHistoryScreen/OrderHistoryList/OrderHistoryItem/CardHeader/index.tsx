import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import { HeaderCardProps } from '../../../../../types/screens/history';
import {
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../../../../../theme/theme';

const CardHeader = ({ orderDate, orderTotal }: HeaderCardProps) => {
  return (
    <View style={styles.CardHeader}>
      <View>
        <Text style={styles.HeaderTitle}>Order Time</Text>
        <Text style={styles.HeaderSubtitle}>{orderDate}</Text>
      </View>
      <View style={styles.PriceContainer}>
        <Text style={styles.HeaderTitle}>Total Amount</Text>
        <Text style={styles.HeaderPrice}>$&nbsp;{orderTotal}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  CardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: SPACING.space_20,
    alignItems: 'center',
  },
  HeaderTitle: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryWhiteHex,
  },
  HeaderSubtitle: {
    fontFamily: FONTFAMILY.poppins_light,
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryWhiteHex,
  },
  PriceContainer: {
    alignItems: 'flex-end',
  },
  HeaderPrice: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_18,
    color: COLORS.primaryOrangeHex,
  },
});

export default CardHeader;
