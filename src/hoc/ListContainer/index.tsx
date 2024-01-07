import { StyleSheet, View } from 'react-native';
import React from 'react';

import { SPACING } from '../../theme/theme';
import { ChildrenType } from '../../types';

const ListContainer = ({ children }: ChildrenType) => {
  return <View style={styles.ListConatiner}>{children}</View>;
};

const styles = StyleSheet.create({
  ListConatiner: {
    paddingHorizontal: SPACING.space_20,
    gap: SPACING.space_20,
  },
});

export default ListContainer;
