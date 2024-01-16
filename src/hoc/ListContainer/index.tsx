import { StyleSheet, View } from 'react-native';
import React from 'react';

import { SPACING } from '../../theme/theme';
import { ListContainerProps } from '../../types';

import EmptyList from '../../components/EmptyList';

const ListContainer = ({
  children,
  emptyText,
  listLength,
}: ListContainerProps) => {
  if (listLength === 0) {
    return <EmptyList title={emptyText} />;
  }
  return <View style={styles.ListConatiner}>{children}</View>;
};

const styles = StyleSheet.create({
  ListConatiner: {
    paddingHorizontal: SPACING.space_20,
    gap: SPACING.space_20,
  },
});

export default ListContainer;
