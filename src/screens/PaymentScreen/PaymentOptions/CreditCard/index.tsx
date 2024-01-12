import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

import { COLORS, FONTSIZE } from '../../../../theme/theme';
import { CreditCardProps } from '../../../../types/screens/payment';

import CustomIcon from '../../../../components/CustomIcon';

const CreditCard = ({ dispatch, paymentMode }: CreditCardProps) => {
  const dynamicBorderColor =
    paymentMode === 'Credit Card'
      ? COLORS.primaryOrangeHex
      : COLORS.primaryGreyHex;
  return (
    <TouchableOpacity
      onPress={() => {
        dispatch({
          type: 'SET_PAYMENT_MODE',
          payload: 'Credit Card',
        });
      }}>
      <View
        style={[
          styles.CreditCardContainer,
          { borderColor: dynamicBorderColor },
        ]}>
        <Text style={styles.CreditCardTitle}>Credit Card</Text>
        <View style={styles.CreditCardBackground}>
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
            style={styles.LinearGradient}>
            <View style={styles.LinearGradientRow}>
              <CustomIcon
                name="chip"
                size={FONTSIZE.size_40}
                color={COLORS.primaryOrangeHex}
              />
              <CustomIcon
                name="visa"
                size={FONTSIZE.size_60}
                color={COLORS.primaryWhiteHex}
              />
            </View>
            <View style={styles.CreditCardNumberContainer}>
              <Text style={styles.CreditCardNumber}>4779</Text>
              <Text style={styles.CreditCardNumber}>1800</Text>
              <Text style={styles.CreditCardNumber}>0701</Text>
              <Text style={styles.CreditCardNumber}>2009</Text>
            </View>
            <View style={styles.LinearGradientRow}>
              <View>
                <Text style={styles.CreditCardNameSubtitle}>
                  Card Holder Name
                </Text>
                <Text style={styles.CreditCardNameTitle}>Jonathan Doe</Text>
              </View>
              <View>
                <Text style={styles.CreditCardNameSubtitle}>Expiry Date</Text>
                <Text style={styles.CreditCardNameTitle}>01/26</Text>
              </View>
            </View>
          </LinearGradient>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  CreditCardContainer: {},
  CreditCardTitle: {},
  CreditCardBackground: {},
  LinearGradient: {},
  LinearGradientRow: {},
  CreditCardNumberContainer: {},
  CreditCardNumber: {},
  CreditCardNameTitle: {},
  CreditCardNameSubtitle: {},
});

export default CreditCard;
