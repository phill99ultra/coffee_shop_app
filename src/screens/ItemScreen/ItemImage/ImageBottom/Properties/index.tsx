import { StyleSheet, View } from 'react-native';
import React from 'react';

import { ProprertiesProps } from '../../../../../types/screens/item';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../../../../../theme/theme';
import Property from './Property';

const Properties = ({ type, ingredients }: ProprertiesProps) => {
  const dynamicMarginTop = type === 'Bean' ? SPACING.space_6 : 0;
  const dynamicSize = type === 'Bean' ? FONTSIZE.size_18 : FONTSIZE.size_24;

  return (
    <View style={styles.PropertiesContainer}>
      <Property
        type={type}
        propertyText={type}
        size={dynamicSize}
        iconType={{ bean: 'bean', beans: 'beans' }}
        dynamicMarginTop={dynamicMarginTop}
      />
      <Property
        type={type}
        propertyText={ingredients}
        size={FONTSIZE.size_16}
        iconType={{ bean: 'location', beans: 'drop' }}
        dynamicMarginTop={SPACING.space_6}
      />
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
