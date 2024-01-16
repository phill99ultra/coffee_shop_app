import React from 'react';

import ListContainer from '../../../hoc/ListContainer';
import OrderHistoryItem from './OrderHistoryItem';

import { OrderHistoryListProps } from '../../../types/screens/history';

const OrderHistoryList = ({
  ordersList,
  navigation,
}: OrderHistoryListProps) => {
  return (
    <ListContainer listLength={ordersList.length} emptyText="No Order History">
      {ordersList.map((order, index: number) => (
        <OrderHistoryItem
          key={index.toString()}
          orderDate={order.orderDate}
          orderList={order.cartList}
          orderTotal={order.cartListTotalPrice}
          navigation={navigation}
        />
      ))}
    </ListContainer>
  );
};

export default OrderHistoryList;
