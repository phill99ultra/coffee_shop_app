import { StyleSheet, View } from 'react-native';
import React from 'react';

import { SizeProps } from '../../../../types/screens/item';
import { PriceType } from '../../../../types/data';
import Price from './Price';
import { SPACING } from '../../../../theme/theme';

const Size = ({ prices, type, itemPrice, dispatch }: SizeProps) => {
  return (
    <View style={styles.OuterContainer}>
      {prices.map(({ size, price, currency }: PriceType) => (
        <Price
          key={size}
          size={size}
          price={price}
          itemPrice={itemPrice}
          currency={currency}
          type={type}
          dispatch={dispatch}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  OuterContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: SPACING.space_20,
  },
});

export default Size;
