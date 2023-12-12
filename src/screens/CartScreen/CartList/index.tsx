import { StyleSheet, View } from 'react-native';
import React from 'react';

import EmptyList from './EmptyList';
import CartListItem from './CartListItem';
import { CartListProps } from '../../../types/screens/cart';
import { SPACING } from '../../../theme/theme';

const CartList = ({ list }: CartListProps) => {
  if (list.length === 0) {
    return <EmptyList title="Cart is empty" />;
  }

  return (
    <View style={styles.ListConatiner}>
      {list.map(item => (
        <CartListItem key={item.id} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  ListConatiner: {
    paddingHorizontal: SPACING.space_20,
    gap: SPACING.space_20,
  },
});

export default CartList;
