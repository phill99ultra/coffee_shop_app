import { ScrollView, StyleSheet, View } from 'react-native';
import React from 'react';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';

import { ChildrenType } from '../../types';

const ContentContainer = ({ children }: ChildrenType) => {
  const topBarHeight = useBottomTabBarHeight();
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.ScrollViewContainer}>
      <View style={[styles.ScrollViewInner, { marginBottom: topBarHeight }]}>
        <View style={styles.ContentContainer}>{children}</View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  ScrollViewContainer: {
    flexGrow: 1,
  },
  ScrollViewInner: {
    flex: 1,
    justifyContent: 'space-between',
  },
  ContentContainer: {
    flex: 1,
  },
});

export default ContentContainer;
