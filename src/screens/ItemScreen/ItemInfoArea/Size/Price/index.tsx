import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';

import { PriceProps } from '../../../../../types';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../../../../../theme/theme';

const Price = ({
  size,
  itemPrice,
  price,
  currency,
  type,
  dispatch,
}: PriceProps) => {
  const dynamicTextSize = type === 'Bean' ? FONTSIZE.size_14 : FONTSIZE.size_16;
  const dynamicSizeColor =
    size === itemPrice.size
      ? COLORS.primaryOrangeHex
      : COLORS.primaryDarkGreyHex;
  const dynamicTextColor =
    size === itemPrice.size
      ? COLORS.primaryOrangeHex
      : COLORS.secondaryLightGreyHex;
  return (
    <TouchableOpacity
      onPress={() => {
        dispatch({
          type: 'SET_PRICE',
          payload: { size: size, price: price, currency: currency },
        });
      }}
      style={[
        styles.SizeBox,
        {
          borderColor: dynamicSizeColor,
        },
      ]}>
      <Text
        style={[
          styles.SizeText,
          {
            fontSize: dynamicTextSize,
            color: dynamicTextColor,
          },
        ]}>
        {size}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  SizeBox: {
    flex: 1,
    backgroundColor: COLORS.primaryDarkGreyHex,
    alignItems: 'center',
    justifyContent: 'center',
    height: SPACING.space_48,
    borderRadius: BORDERRADIUS.radius_10,
    borderWidth: 2,
  },
  SizeText: {
    fontFamily: FONTFAMILY.poppins_medium,
  },
});

export default Price;
