import { Text, View } from 'react-native';
import React from 'react';

import { useStore } from '../../store';
import { StoreType } from '../../types/data';

function CartScreen() {
  const cartList = useStore((state: StoreType) => state.cartList);
  console.log('cart list ', cartList.length);
  return (
    <View>
      <Text>CartScreen</Text>
    </View>
  );
}

// const styles = StyleSheet.create({});

export default CartScreen;
