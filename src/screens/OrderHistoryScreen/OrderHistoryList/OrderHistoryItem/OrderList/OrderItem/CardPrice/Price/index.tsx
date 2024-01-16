import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import { CardPriceBoxProps } from '../../../../../../../../types/screens/history';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
} from '../../../../../../../../theme/theme';

const Price = ({ price, currency }: CardPriceBoxProps) => {
  return (
    <View style={styles.PriceBoxRight}>
      <Text style={styles.PriceCurrency}>
        {currency}&nbsp;
        <Text style={styles.Price}>{price}</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  PriceBoxRight: {
    backgroundColor: COLORS.primaryBlackHex,
    height: 45,
    flex: 1,
    borderTopRightRadius: BORDERRADIUS.radius_10,
    borderBottomRightRadius: BORDERRADIUS.radius_10,
    justifyContent: 'center',
    alignItems: 'center',
    borderLeftWidth: 1,
    borderLeftColor: COLORS.primaryGreyHex,
  },
  PriceCurrency: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_18,
    color: COLORS.primaryOrangeHex,
  },
  Price: {
    color: COLORS.primaryWhiteHex,
  },
});

export default Price;
