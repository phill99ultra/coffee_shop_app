import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import {
  FONTFAMILY,
  FONTSIZE,
  COLORS,
  BORDERRADIUS,
  SPACING,
} from '../../../../../theme/theme';
import { CartSingleItemInfoProps } from '../../../../../types/screens/cart';
import IncrementDecrementBtn from '../CartItemSizes/IncrementDecrementBtn';

const CartSingleItemInfo = ({
  id,
  name,
  special_ingredient,
  fontSize,
  size,
  currency,
  price,
  quantity,
  handleChangeQuantity,
}: CartSingleItemInfoProps) => {
  return (
    <View style={styles.CartItemInfoContainer}>
      <View>
        <Text style={styles.CartItemTitle}>{name}</Text>
        <Text style={styles.CartItemSubtitle}>{special_ingredient}</Text>
      </View>
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
  CartItemInfoContainer: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'space-around',
  },
  CartItemTitle: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_18,
    color: COLORS.primaryWhiteHex,
  },
  CartItemSubtitle: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_12,
    color: COLORS.secondaryLightGreyHex,
  },
  ValueContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
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

export default CartSingleItemInfo;
