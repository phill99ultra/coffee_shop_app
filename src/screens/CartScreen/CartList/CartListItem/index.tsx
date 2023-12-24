import { TouchableOpacity, View, StyleSheet, Image } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

import { CartListItemProps } from '../../../../types/screens/cart';
import {
  BORDERRADIUS,
  COLORS,
  FONTSIZE,
  SPACING,
} from '../../../../theme/theme';
import CartItemInfo from './CartItemInfo';
import CartSingleItemInfo from './CartSingleItemInfo';
import CartItemSizes from './CartItemSizes';

const CartListItem = ({
  id,
  index,
  name,
  imagelink_square,
  roasted,
  special_ingredient,
  type,
  prices,
  navigation,
  handleChangeQuantity,
}: CartListItemProps) => {
  const dynamicFontSize = type === 'Bean' ? FONTSIZE.size_12 : FONTSIZE.size_16;
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.push('Item', { index, id, type });
      }}>
      <View>
        {prices.length !== 1 ? (
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
                id={id}
                size={price.size}
                currency={price.currency}
                price={price.price}
                quantity={price.quantity}
                fontSize={dynamicFontSize}
                handleChangeQuantity={handleChangeQuantity}
              />
            ))}
          </LinearGradient>
        ) : (
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
            style={styles.CartItemSingleLinearGradient}>
            <View>
              <Image source={imagelink_square} style={styles.CartItemImage} />
            </View>
            <CartSingleItemInfo
              id={id}
              name={name}
              special_ingredient={special_ingredient}
              fontSize={dynamicFontSize}
              size={prices[0].size}
              currency={prices[0].currency}
              price={prices[0].price}
              quantity={prices[0].quantity}
              handleChangeQuantity={handleChangeQuantity}
            />
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
  CartItemSingleLinearGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: SPACING.space_12,
    gap: SPACING.space_12,
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
