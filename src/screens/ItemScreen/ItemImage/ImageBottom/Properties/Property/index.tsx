import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import CustomIcon from '../../../../../../components/CustomIcon';
import {
  FONTSIZE,
  COLORS,
  BORDERRADIUS,
  FONTFAMILY,
} from '../../../../../../theme/theme';
import { PropertyProps } from '../../../../../../types/screens/item';

const Property = ({
  type,
  propertyText,
  size,
  iconType,
  dynamicMarginTop,
}: PropertyProps) => {
  return (
    <View style={styles.Property}>
      <CustomIcon
        name={type === 'Bean' ? iconType.bean : iconType.beans}
        size={size}
        color={COLORS.primaryOrangeHex}
      />
      <Text style={[styles.PropertyText, { marginTop: dynamicMarginTop }]}>
        {propertyText}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
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

export default Property;
