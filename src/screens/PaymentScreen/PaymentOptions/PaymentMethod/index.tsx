import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

import { PaymentMethodProps } from '../../../../types/screens/payment';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../../../../theme/theme';

import PaymentLinearGradient from '../../../../hoc/PaymentLinearGradient';
import CustomIcon from '../../../../components/CustomIcon';

const PaymentMethod = ({
  name,
  icon,
  isIcon,
  paymentMode,
  dispatch,
}: PaymentMethodProps) => {
  const dynamicBorderColor =
    paymentMode === name ? COLORS.primaryOrangeHex : COLORS.primaryGreyHex;
  return (
    <TouchableOpacity
      onPress={() => {
        dispatch({
          type: 'SET_PAYMENT_MODE',
          payload: name,
        });
      }}>
      <View
        style={[
          styles.PaymentCardContainer,
          { borderColor: dynamicBorderColor },
        ]}>
        {isIcon ? (
          <PaymentLinearGradient isIcon={isIcon}>
            <View style={styles.WalletRow}>
              <CustomIcon
                name="wallet"
                color={COLORS.primaryOrangeHex}
                size={FONTSIZE.size_30}
              />
              <Text style={styles.PaymentTitle}>{name}</Text>
            </View>
            <Text style={styles.PaymentPrice}>$ 100.50</Text>
          </PaymentLinearGradient>
        ) : (
          <PaymentLinearGradient isIcon={isIcon}>
            <Image source={icon} style={styles.PaymentImage} />
            <Text style={styles.PaymentTitle}>{name}</Text>
          </PaymentLinearGradient>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  PaymentCardContainer: {
    borderRadius: BORDERRADIUS.radius_30,
    backgroundColor: COLORS.primaryGreyHex,
    borderWidth: 3,
  },
  WalletRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.space_24,
  },
  PaymentTitle: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryWhiteHex,
  },
  PaymentPrice: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_16,
    color: COLORS.secondaryLightGreyHex,
  },
  PaymentImage: {
    width: SPACING.space_30,
    height: SPACING.space_30,
  },
});

export default PaymentMethod;
