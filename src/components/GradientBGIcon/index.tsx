import { StyleSheet, View } from 'react-native';
import React from 'react';

import { GradientIconProps } from '../../types';
import { COLORS, SPACING } from '../../theme/theme';

import CustomIcon from '../CustomIcon';
import LinearGradientContainer from '../../hoc/LinearGradient';

const GradientIcon = ({ name, color, size }: GradientIconProps) => {
  return (
    <View style={styles.Container}>
      <LinearGradientContainer style={styles.LinearGradientBG}>
        <CustomIcon name={name} size={size} color={color} />
      </LinearGradientContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    borderWidth: 2,
    borderColor: COLORS.secondaryDarkGreyHex,
    borderRadius: SPACING.space_12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.secondaryDarkGreyHex,
    overflow: 'hidden',
  },
  LinearGradientBG: {
    width: SPACING.space_36,
    height: SPACING.space_36,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default GradientIcon;
