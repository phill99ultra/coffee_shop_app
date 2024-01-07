import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';
import React from 'react';

import { COLORS } from '../../theme/theme';
import { ChildrenType } from '../../types';

const ScreenContainer = ({ children }: ChildrenType) => {
  return (
    <SafeAreaView style={styles.SafeAreaContainer}>
      <View style={styles.ScreenContainer}>
        <StatusBar backgroundColor={COLORS.primaryBlackHex} />
        {children}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  SafeAreaContainer: {
    flex: 1,
    backgroundColor: COLORS.primaryBlackHex,
  },
  ScreenContainer: {
    flex: 1,
    backgroundColor: COLORS.primaryBlackHex,
  },
});

export default ScreenContainer;
