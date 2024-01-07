import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';

import { EmptyListProps } from '../../types/screens/cart';
import { COLORS, FONTFAMILY, FONTSIZE } from '../../theme/theme';

const EmptyList = ({ title }: EmptyListProps) => {
  return (
    <View style={styles.EmptyCartContainer}>
      <LottieView
        style={styles.LottieContainer}
        source={require('../../lottie/coffeecup.json')}
        autoPlay
        loop
      />
      <Text style={styles.LottieText}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  EmptyCartContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  LottieContainer: {
    height: 300,
  },
  LottieText: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryOrangeHex,
    textAlign: 'center',
  },
});

export default EmptyList;
