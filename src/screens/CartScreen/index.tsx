import { ScrollView, View, StyleSheet, StatusBar } from 'react-native';
import React from 'react';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';

import { COLORS } from '../../theme/theme';
import HeaderBar from '../../components/HeaderBar';
import CartList from './CartList';
import PaymentFooter from '../../components/PaymentFooter';
import { CartScreenProps } from '../../types/navigation';
import useCart from './hooks';

function CartScreen({ navigation }: CartScreenProps) {
  const topBarHeight = useBottomTabBarHeight();
  const { cartList, cartPrice, handleNavigateToPayment } = useCart();

  // console.log('cart list = ', cartList.length);
  return (
    <View style={styles.ScreenContainer}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ScrollViewContainer}>
        <View style={[styles.ScrollViewInner, { marginBottom: topBarHeight }]}>
          <View style={styles.ContentContainer}>
            <HeaderBar title="Cart" />
            <CartList list={cartList} />
          </View>
          {cartList.length !== 0 && (
            <PaymentFooter
              title="Pay"
              currency="$"
              price={cartPrice}
              handleBtnPress={() => handleNavigateToPayment(navigation)}
            />
          )}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  ScreenContainer: {
    flex: 1,
    backgroundColor: COLORS.primaryBlackHex,
  },
  ScrollViewContainer: {
    flexGrow: 1,
  },
  ScrollViewInner: {
    flex: 1,
    justifyContent: 'space-between',
  },
  ContentContainer: {
    flex: 1,
  },
});

export default CartScreen;
