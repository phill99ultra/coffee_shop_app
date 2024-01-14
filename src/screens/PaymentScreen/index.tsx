import { ScrollView, StyleSheet } from 'react-native';
import React from 'react';

import { PAYMENT_LIST } from '../../constants';
import { PaymentScreenProps } from '../../types/navigation';

import ScreenContainer from '../../hoc/ScreenContainer';
import PaymentHeader from './PaymentHeader';
import PaymentOptions from './PaymentOptions';
import PaymentFooter from '../../components/PaymentFooter';
import Animation from './PopUpAnimation';

import usePayment from './hooks';

function PaymentScreen({ navigation, route }: PaymentScreenProps) {
  const { amount } = route.params;
  const {
    state: { paymentMode, showAnimation },
    dispatch,
    handlePressPayment,
  } = usePayment();
  return (
    <ScreenContainer>
      {showAnimation && (
        <Animation
          style={styles.Animation}
          source={require('../../lottie/successful.json')}
        />
      )}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ScrollViewFlex}>
        <PaymentHeader navigation={navigation} />
        <PaymentOptions
          options={PAYMENT_LIST}
          paymentMode={paymentMode}
          dispatch={dispatch}
        />
      </ScrollView>
      <PaymentFooter
        title={`Pay with ${paymentMode}`}
        price={amount}
        currency="$"
        handleBtnPress={() => handlePressPayment(navigation)}
      />
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  ScrollViewFlex: {
    flexGrow: 1,
  },
  Animation: {
    flex: 1,
  },
});

export default PaymentScreen;
