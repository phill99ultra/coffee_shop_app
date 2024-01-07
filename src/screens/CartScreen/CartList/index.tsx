import React from 'react';

import EmptyList from '../../../components/EmptyList';
import CartListItem from './CartListItem';
import { CartListProps } from '../../../types/screens/cart';
import ListContainer from '../../../hoc/ListContainer';

const CartList = ({
  list,
  navigation,
  handleChangeQuantity,
}: CartListProps) => {
  if (list.length === 0) {
    return <EmptyList title="Cart is empty" />;
  }

  return (
    <ListContainer>
      {list.map(item => (
        <CartListItem
          key={item.id}
          id={item.id}
          index={item.index}
          name={item.name}
          imagelink_square={item.imagelink_square}
          roasted={item.roasted}
          special_ingredient={item.special_ingredient}
          type={item.type}
          prices={item.prices}
          navigation={navigation}
          handleChangeQuantity={handleChangeQuantity}
        />
      ))}
    </ListContainer>
  );
};

export default CartList;
