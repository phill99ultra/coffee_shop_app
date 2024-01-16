import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';

import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../../../theme/theme';
import { DownloadButtonProps } from '../../../types/screens/history';

const DownloadButton = ({ handlePress }: DownloadButtonProps) => {
  return (
    <TouchableOpacity style={styles.DownloadButton} onPress={handlePress}>
      <Text style={styles.ButtonText}>Download</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  DownloadButton: {
    margin: SPACING.space_20,
    backgroundColor: COLORS.primaryOrangeHex,
    alignItems: 'center',
    justifyContent: 'center',
    height: SPACING.space_72,
    borderRadius: BORDERRADIUS.radius_20,
  },
  ButtonText: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_18,
    color: COLORS.primaryWhiteHex,
  },
});

export default DownloadButton;
