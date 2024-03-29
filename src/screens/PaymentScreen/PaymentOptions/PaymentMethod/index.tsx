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

import LinearGradientContainer from '../../../../hoc/LinearGradient';
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
  const dynamicJustifyContent = isIcon ? 'space-between' : undefined;
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
          <LinearGradientContainer
            style={[
              styles.LinearGradientWallet,
              { justifyContent: dynamicJustifyContent },
            ]}>
            <View style={styles.WalletRow}>
              <CustomIcon
                name="wallet"
                color={COLORS.primaryOrangeHex}
                size={FONTSIZE.size_30}
              />
              <Text style={styles.PaymentTitle}>{name}</Text>
            </View>
            <Text style={styles.PaymentPrice}>$ 100.50</Text>
          </LinearGradientContainer>
        ) : (
          <LinearGradientContainer style={styles.LinearGradientWallet}>
            <Image source={icon} style={styles.PaymentImage} />
            <Text style={styles.PaymentTitle}>{name}</Text>
          </LinearGradientContainer>
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
  LinearGradientWallet: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: SPACING.space_12,
    paddingHorizontal: SPACING.space_24,
    gap: SPACING.space_24,
    borderRadius: BORDERRADIUS.radius_30,
  },
});

export default PaymentMethod;
