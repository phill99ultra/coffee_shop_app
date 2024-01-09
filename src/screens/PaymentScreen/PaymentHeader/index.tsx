import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

import { COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../../../theme/theme';
import { PaymentHeaderProps } from '../../../types/screens/payment';

import GradientIcon from '../../../components/GradientBGIcon';

const PaymentHeader = ({ navigation }: PaymentHeaderProps) => {
  return (
    <View style={styles.HeaderContainer}>
      <TouchableOpacity onPress={() => navigation.pop()}>
        <GradientIcon
          name="left"
          color={COLORS.primaryLightGreyHex}
          size={FONTSIZE.size_16}
        />
      </TouchableOpacity>
      <Text style={styles.HeaderText}>Payments</Text>
      <View style={styles.EmptyView} />
    </View>
  );
};

const styles = StyleSheet.create({
  HeaderContainer: {
    paddingHorizontal: SPACING.space_24,
    paddingVertical: SPACING.space_15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  HeaderText: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_20,
    color: COLORS.primaryWhiteHex,
  },
  EmptyView: {
    width: SPACING.space_36,
    height: SPACING.space_36,
  },
});

export default PaymentHeader;
