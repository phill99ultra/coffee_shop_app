import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import CustomIcon from '../../../../../components/CustomIcon';
import { ProprertiesProps } from '../../../../../types';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../../../../../theme/theme';

const Properties = ({ type, ingredients }: ProprertiesProps) => {
  const dynamicMarginTop = type === 'Bean' ? SPACING.space_6 : 0;

  return (
    <View style={styles.PropertiesContainer}>
      <View style={styles.Property}>
        <CustomIcon
          name={type === 'Bean' ? 'bean' : 'beans'}
          size={type === 'Bean' ? FONTSIZE.size_18 : FONTSIZE.size_24}
          color={COLORS.primaryOrangeHex}
        />
        <Text style={[styles.PropertyText, { marginTop: dynamicMarginTop }]}>
          {type}
        </Text>
      </View>
      <View style={styles.Property}>
        <CustomIcon
          name={type === 'Bean' ? 'location' : 'drop'}
          size={FONTSIZE.size_16}
          color={COLORS.primaryOrangeHex}
        />
        <Text style={styles.PropertyText}>{ingredients}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  PropertiesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.space_20,
  },
  Property: {
    width: 55,
    height: 55,
    borderRadius: BORDERRADIUS.radius_15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primaryBlackHex,
  },
  PropertyText: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_10,
    color: COLORS.primaryWhiteHex,
  },
});

export default Properties;
