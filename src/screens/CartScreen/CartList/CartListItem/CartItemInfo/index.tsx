import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import {
  SPACING,
  FONTFAMILY,
  FONTSIZE,
  COLORS,
  BORDERRADIUS,
} from '../../../../../theme/theme';
import { CartItemInfoProps } from '../../../../../types/screens/cart';

const CartItemInfo = ({
  name,
  special_ingredient,
  roasted,
}: CartItemInfoProps) => {
  return (
    <View style={styles.CartItemInfo}>
      <View>
        <Text style={styles.CartItemTitle}>{name}</Text>
        <Text style={styles.CartItemSubtitle}>{special_ingredient}</Text>
      </View>
      <View style={styles.CartItemRoastedContainer}>
        <Text style={styles.CartItemRoastedText}>{roasted}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  CartItemInfo: {
    flex: 1,
    paddingVertical: SPACING.space_4,
    justifyContent: 'space-between',
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
  CartItemRoastedContainer: {
    width: 120,
    height: 50,
    borderRadius: BORDERRADIUS.radius_15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primaryDarkGreyHex,
  },
  CartItemRoastedText: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_10,
    color: COLORS.primaryWhiteHex,
  },
});

export default CartItemInfo;
