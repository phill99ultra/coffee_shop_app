import { StyleSheet, View } from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';

import { AnimationProps } from '../../types/screens/payment';
import { COLORS } from '../../theme/theme';

const Animation = ({ source, style }: AnimationProps) => {
  return (
    <View style={styles.AnimationContainer}>
      <LottieView style={style} source={source} loop={false} autoPlay />
    </View>
  );
};

const styles = StyleSheet.create({
  AnimationContainer: {
    flex: 1,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    backgroundColor: COLORS.secondaryBlackRGBA,
    justifyContent: 'center',
  },
});

export default Animation;
