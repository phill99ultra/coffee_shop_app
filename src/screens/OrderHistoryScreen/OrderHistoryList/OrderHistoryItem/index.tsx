import { StyleSheet, View } from 'react-native';
import React from 'react';

import { OrderHistoryItemProps } from '../../../../types/screens/history';
import { SPACING } from '../../../../theme/theme';

import CardHeader from './CardHeader';
import OrderList from './OrderList';

const OrderHistoryItem = ({
  orderDate,
  orderList,
  orderTotal,
  navigation,
}: OrderHistoryItemProps) => {
  return (
    <View style={styles.CardContainer}>
      <CardHeader orderDate={orderDate} orderTotal={orderTotal} />
      <OrderList orderList={orderList} navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  CardContainer: {
    gap: SPACING.space_10,
  },
});

export default OrderHistoryItem;
