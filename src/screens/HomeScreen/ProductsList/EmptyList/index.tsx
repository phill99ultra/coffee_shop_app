import { Dimensions, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../../../../theme/theme';

const EmptyList = () => {
  return (
    <View style={styles.EmptyListContainer}>
      <Text style={styles.EmptyListText}>No Cofee Available</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  EmptyListContainer: {
    width: Dimensions.get('window').width - SPACING.space_30 * 2,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: SPACING.space_36 * 3,
  },
  EmptyListText: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryLightGreyHex,
    marginBottom: SPACING.space_4,
  },
});

export default EmptyList;
