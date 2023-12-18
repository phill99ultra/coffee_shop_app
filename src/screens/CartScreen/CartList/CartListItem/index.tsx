import { TouchableOpacity, View, StyleSheet, Image, Text } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

import { CartListItemProps } from '../../../../types/screens/cart';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../../../../theme/theme';
import CartItemInfo from './CartItemInfo';
import CartItemSizes from './CartItemSizes';

const CartListItem = ({
  id,
  name,
  imagelink_square,
  roasted,
  special_ingredient,
  type,
  prices,
}: CartListItemProps) => {
  return (
    <TouchableOpacity onPress={() => {}}>
      <View>
        {prices.length !== 1 && (
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
            style={styles.CartItemLinearGradient}>
            <View style={styles.CartItemRow}>
              <Image style={styles.CartItemImage} source={imagelink_square} />
              <CartItemInfo
                name={name}
                special_ingredient={special_ingredient}
                roasted={roasted}
              />
            </View>
            {prices.map((price, index) => (
              <CartItemSizes
                key={index.toString()}
                size={price.size}
                type={type}
                currency={price.currency}
                price={price.price}
              />
            ))}
          </LinearGradient>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  CartItemLinearGradient: {
    flex: 1,
    gap: SPACING.space_12,
    padding: SPACING.space_12,
    borderRadius: BORDERRADIUS.radius_25,
  },
  CartItemImage: {
    width: 130,
    height: 130,
    borderRadius: BORDERRADIUS.radius_20,
  },
  CartItemRow: {
    flex: 1,
    flexDirection: 'row',
    gap: SPACING.space_12,
  },
});

export default CartListItem;
