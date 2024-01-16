import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

import { COLORS } from '../../theme/theme';
import { LinearGradientProps } from '../../types/screens/payment';

const LinearGradientContainer = ({ children, style }: LinearGradientProps) => {
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
      style={style}>
      {children}
    </LinearGradient>
  );
};

export default LinearGradientContainer;
