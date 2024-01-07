import { View, StyleSheet } from 'react-native';
import React from 'react';

import { CartScreenProps } from '../../types/navigation';

import HeaderBar from '../../components/HeaderBar';
import CartList from './CartList';
import ScreenContainer from '../../hoc/ScreenContainer';
import ContentContainer from '../../hoc/ContentContainer';
import PaymentFooter from '../../components/PaymentFooter';

import useCart from './hooks';

function CartScreen({ navigation }: CartScreenProps) {
  const { cartList, cartPrice, handleNavigateToPayment, handleChangeQuantity } =
    useCart();

  return (
    <ScreenContainer>
      <ContentContainer>
        <View style={styles.ContentContainer}>
          <HeaderBar title="Cart" />
          <CartList
            list={cartList}
            navigation={navigation}
            handleChangeQuantity={handleChangeQuantity}
          />
        </View>
        {cartList.length !== 0 && (
          <PaymentFooter
            title="Pay"
            currency="$"
            price={cartPrice}
            handleBtnPress={() => handleNavigateToPayment(navigation)}
          />
        )}
      </ContentContainer>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  ContentContainer: {
    flex: 1,
  },
});

export default CartScreen;
