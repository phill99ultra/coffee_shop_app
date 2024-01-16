import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import { CardSizeProps } from '../../../../../../../../types/screens/history';
import {
  FONTSIZE,
  COLORS,
  BORDERRADIUS,
  FONTFAMILY,
} from '../../../../../../../../theme/theme';

const Size = ({ type, size }: CardSizeProps) => {
  const dynamicFontSize = type === 'Bean' ? FONTSIZE.size_12 : FONTSIZE.size_16;
  return (
    <View style={styles.SizeBoxLeft}>
      <Text style={[styles.SizeText, { fontSize: dynamicFontSize }]}>
        {size}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  SizeBoxLeft: {
    backgroundColor: COLORS.primaryBlackHex,
    height: 45,
    flex: 1,
    borderTopLeftRadius: BORDERRADIUS.radius_10,
    borderBottomLeftRadius: BORDERRADIUS.radius_10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 1,
    borderRightColor: COLORS.primaryGreyHex,
  },
  SizeText: {
    fontFamily: FONTFAMILY.poppins_medium,
    color: COLORS.secondaryLightGreyHex,
  },
});

export default Size;
