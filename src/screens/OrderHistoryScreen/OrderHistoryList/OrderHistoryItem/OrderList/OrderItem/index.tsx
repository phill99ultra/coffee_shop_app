import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

import { OrderItemProps } from '../../../../../../types/screens/history';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../../../../../../theme/theme';

import LinearGradientContainer from '../../../../../../hoc/LinearGradient';
import CardImage from './CardImage';
import CardPrice from './CardPrice';

const OrderItem = ({
  id,
  index,
  type,
  name,
  imagelink_square,
  special_ingredient,
  prices,
  item_price,
  navigation,
}: OrderItemProps) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.push('Item', { index, id, type });
      }}>
      <LinearGradientContainer style={styles.CardLinearGradient}>
        <View style={styles.CardInfoContainer}>
          <CardImage
            name={name}
            special_ingredient={special_ingredient}
            imagelink_square={imagelink_square}
          />
          <View>
            <Text style={styles.CardCurrency}>
              $&nbsp;
              <Text style={styles.CardPrice}>{item_price}</Text>
            </Text>
          </View>
        </View>
        {prices.map((price, index) => (
          <CardPrice
            key={index.toString()}
            size={price.size}
            price={price.price}
            currency={price.currency}
            quantity={price.quantity}
            type={type}
          />
        ))}
      </LinearGradientContainer>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  CardLinearGradient: {
    gap: SPACING.space_20,
    padding: SPACING.space_20,
    borderRadius: BORDERRADIUS.radius_25,
  },
  CardInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  CardCurrency: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_18,
    color: COLORS.primaryOrangeHex,
  },
  CardPrice: {
    color: COLORS.primaryWhiteHex,
  },
});

export default OrderItem;
