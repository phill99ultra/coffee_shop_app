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
import IncrementDecrementBtn from './IncrementDecrementBtn';

const CartItemSizes = ({
  id,
  size,
  currency,
  price,
  quantity,
  fontSize,
  handleChangeQuantity,
}: CartItemSizesProps) => {
  return (
    <View style={styles.RowContainer}>
      <View style={styles.ValueContainer}>
        <View style={styles.SizeBox}>
          <Text style={[styles.SizeText, { fontSize: fontSize }]}>{size}</Text>
        </View>
        <Text style={styles.CurrencyText}>
          {currency}
          <Text style={styles.PriceText}>&nbsp;{price}</Text>
        </Text>
      </View>
      <View style={styles.ValueContainer}>
        <IncrementDecrementBtn
          id={id}
          size={size}
          iconName="minus"
          handleChangeQuantity={handleChangeQuantity}
        />
        <View style={styles.ItemQuantityContainer}>
          <Text style={styles.ItemQuantityText}>{quantity}</Text>
        </View>
        <IncrementDecrementBtn
          id={id}
          size={size}
          iconName="add"
          handleChangeQuantity={handleChangeQuantity}
        />
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
  ItemQuantityContainer: {
    backgroundColor: COLORS.primaryBlackHex,
    borderRadius: BORDERRADIUS.radius_10,
    borderWidth: 2,
    borderColor: COLORS.primaryOrangeHex,
    alignItems: 'center',
    paddingVertical: SPACING.space_4,
    width: 60,
  },
  ItemQuantityText: {
    color: COLORS.primaryWhiteHex,
    fontSize: FONTSIZE.size_16,
    fontFamily: FONTFAMILY.poppins_semibold,
  },
});

export default CartItemSizes;
