import { StyleSheet } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

import { BORDERRADIUS, COLORS, SPACING } from '../../theme/theme';
import { PaymentLinearGradientProps } from '../../types/screens/payment';

const PaymentLinearGradient = ({
  children,
  isIcon,
}: PaymentLinearGradientProps) => {
  const dynamicStyle = isIcon ? 'space-between' : undefined;
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
      style={[styles.LinearGradientWallet, { justifyContent: dynamicStyle }]}>
      {children}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  LinearGradientWallet: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: SPACING.space_12,
    paddingHorizontal: SPACING.space_24,
    gap: SPACING.space_24,
    borderRadius: BORDERRADIUS.radius_30,
  },
});

export default PaymentLinearGradient;
