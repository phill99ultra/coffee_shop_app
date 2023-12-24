import { StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';

import CustomIcon from '../../../../../../components/CustomIcon';
import {
  BORDERRADIUS,
  COLORS,
  FONTSIZE,
  SPACING,
} from '../../../../../../theme/theme';
import { IncrementDecrementBtnProps } from '../../../../../../types/screens/cart';

const IncrementDecrementBtn = ({
  id,
  size,
  iconName,
  handleChangeQuantity,
}: IncrementDecrementBtnProps) => {
  return (
    <TouchableOpacity
      style={styles.ItemIcon}
      onPress={() => handleChangeQuantity(id, size, iconName)}>
      <CustomIcon
        name={iconName}
        color={COLORS.primaryWhiteHex}
        size={FONTSIZE.size_10}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  ItemIcon: {
    backgroundColor: COLORS.primaryOrangeHex,
    padding: SPACING.space_12,
    borderRadius: BORDERRADIUS.radius_10,
  },
});

export default IncrementDecrementBtn;
