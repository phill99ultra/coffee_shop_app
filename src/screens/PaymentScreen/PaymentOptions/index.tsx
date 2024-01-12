import { StyleSheet, View } from 'react-native';
import React from 'react';

import { SPACING } from '../../../theme/theme';
import { PaymentOptionsProps } from '../../../types/screens/payment';

import PaymentMethod from './PaymentMethod';
import CreditCard from './CreditCard';

const PaymentOptions = ({
  options,
  paymentMode,
  dispatch,
}: PaymentOptionsProps) => {
  return (
    <View style={styles.OptionsContainer}>
      <CreditCard paymentMode={paymentMode} dispatch={dispatch} />
      {options.map(({ name, icon, isIcon }) => (
        <PaymentMethod
          key={name}
          name={name}
          icon={icon}
          isIcon={isIcon}
          paymentMode={paymentMode}
          dispatch={dispatch}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  OptionsContainer: {
    padding: SPACING.space_15,
    gap: SPACING.space_15,
  },
});

export default PaymentOptions;
