import { StyleSheet, Image, View } from 'react-native';
import React from 'react';
import { COLORS, SPACING, BORDERRADIUS } from '../../theme/theme';

const ProfileAvatar = () => {
  return (
    <View style={styles.ImageContainer}>
      <Image
        source={require('../../assets/app_images/avatar.png')}
        style={styles.Image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  ImageContainer: {
    width: SPACING.space_36,
    height: SPACING.space_36,
    borderRadius: BORDERRADIUS.radius_12,
    borderWidth: 2,
    borderColor: COLORS.secondaryDarkGreyHex,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  Image: {
    width: SPACING.space_36,
    height: SPACING.space_36,
  },
});

export default ProfileAvatar;
