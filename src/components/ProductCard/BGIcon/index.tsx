import { StyleSheet, View } from 'react-native';
import React from 'react';

import { BGIconProps } from '../../../types';
import { BORDERRADIUS, SPACING } from '../../../theme/theme';
import CustomIcon from '../../CustomIcon';

const BGIcon = ({ name, color, size, backgroundColor }: BGIconProps) => {
  return (
    <View style={[styles.Icon, { backgroundColor: backgroundColor }]}>
      <CustomIcon name={name} color={color} size={size} />
    </View>
  );
};

const styles = StyleSheet.create({
  Icon: {
    width: SPACING.space_30,
    height: SPACING.space_30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: BORDERRADIUS.radius_10,
  },
});

export default BGIcon;
