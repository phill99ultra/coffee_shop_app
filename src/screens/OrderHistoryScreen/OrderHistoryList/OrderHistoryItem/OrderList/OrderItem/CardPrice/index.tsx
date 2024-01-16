import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import { CardPriceProps } from '../../../../../../../types/screens/history';
import { COLORS, FONTFAMILY, FONTSIZE } from '../../../../../../../theme/theme';

import Size from './Size';
import Price from './Price';

const CardPrice = ({
  size,
  price,
  currency,
  quantity,
  type,
}: CardPriceProps) => {
  const sizeRowPrice = (Number(price) * Number(quantity)).toFixed(2).toString();
  return (
    <View style={styles.CardRow}>
      <View style={styles.CardRow}>
        <Size type={type} size={size} />
        <Price price={price} currency={currency} />
      </View>
      <View style={styles.CardRow}>
        <Text style={styles.CardQuantityPriceText}>
          X&nbsp;<Text style={styles.Price}>{quantity}</Text>
        </Text>
        <Text style={styles.CardQuantityPriceText}>$&nbsp;{sizeRowPrice}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  CardRow: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Price: {
    color: COLORS.primaryWhiteHex,
  },
  CardQuantityPriceText: {
    flex: 1,
    textAlign: 'center',
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_18,
    color: COLORS.primaryOrangeHex,
  },
});

export default CardPrice;
