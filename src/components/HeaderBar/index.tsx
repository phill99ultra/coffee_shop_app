import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import { HeaderType } from '../../types';
import { COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../../theme/theme';
import GradientIcon from '../GradientBGIcon';
import ProfileAvatar from '../ProfileAvatar';

const HeaderBar = ({ title }: HeaderType) => {
  return (
    <View style={styles.HeaderContainer}>
      <GradientIcon
        name="menu"
        color={COLORS.primaryLightGreyHex}
        size={FONTSIZE.size_16}
      />
      <Text style={styles.HeaderText}>{title}</Text>
      <ProfileAvatar />
    </View>
  );
};

const styles = StyleSheet.create({
  HeaderContainer: {
    padding: SPACING.space_30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  HeaderText: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_20,
    color: COLORS.primaryWhiteHex,
  },
});

export default HeaderBar;
