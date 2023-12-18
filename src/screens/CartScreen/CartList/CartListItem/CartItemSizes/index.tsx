import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import { CartItemSizesProps } from '../../../../../types/screens/cart';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../../../../../theme/theme';

const CartItemSizes = ({ size, type, currency, price }: CartItemSizesProps) => {
  const dynamicFontSize = type === 'Bean' ? FONTSIZE.size_12 : FONTSIZE.size_16;
  return (
    <View style={styles.RowContainer}>
      <View style={styles.ValueContainer}>
        <View style={styles.SizeBox}>
          <Text style={[styles.SizeText, { fontSize: dynamicFontSize }]}>
            {size}
          </Text>
        </View>
        <Text style={styles.CurrencyText}>
          {currency}
          <Text style={styles.PriceText}>&nbsp;{price}</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  RowContainer: {
    flex: 1,
    alignItems: 'center',
    gap: SPACING.space_20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  ValueContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  SizeBox: {
    backgroundColor: COLORS.primaryBlackHex,
    width: 100,
    height: 40,
    borderRadius: BORDERRADIUS.radius_10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  SizeText: {
    fontFamily: FONTFAMILY.poppins_medium,
    color: COLORS.secondaryLightGreyHex,
  },
  CurrencyText: {
    color: COLORS.primaryOrangeHex,
    fontSize: FONTSIZE.size_18,
    fontFamily: FONTFAMILY.poppins_semibold,
  },
  PriceText: {
    color: COLORS.primaryWhiteHex,
  },
});

export default CartItemSizes;
