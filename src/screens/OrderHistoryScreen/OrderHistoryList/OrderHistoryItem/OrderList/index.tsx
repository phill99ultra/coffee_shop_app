import { StyleSheet, View } from 'react-native';
import React from 'react';

import { SPACING } from '../../../../../theme/theme';
import { OrderListProps } from '../../../../../types/screens/history';

import OrderItem from './OrderItem';

const OrderList = ({ orderList, navigation }: OrderListProps) => {
  return (
    <View style={styles.ListContainer}>
      {orderList.map((item, index) => (
        <OrderItem
          key={item.id + index.toString()}
          id={item.id}
          index={item.index}
          type={item.type}
          name={item.name}
          imagelink_square={item.imagelink_square}
          special_ingredient={item.special_ingredient}
          prices={item.prices}
          item_price={item.item_price}
          navigation={navigation}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  ListContainer: {
    gap: SPACING.space_20,
  },
});

export default OrderList;
