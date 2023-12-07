import { StyleSheet, Text, TouchableWithoutFeedback } from 'react-native';
import React from 'react';

import { FONTFAMILY, FONTSIZE, COLORS, SPACING } from '../../../../theme/theme';
import { DescriptionProps } from '../../../../types';

const Description = ({
  fullDescription,
  description,
  dispatch,
}: DescriptionProps) => {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        dispatch({
          type: 'SET_FULL_DESCRIPTION',
          payload: !fullDescription,
        });
      }}>
      <Text
        style={styles.DescriptionText}
        numberOfLines={fullDescription ? undefined : 3}>
        {description}
      </Text>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  DescriptionText: {
    letterSpacing: 0.5,
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_14,
    color: COLORS.primaryWhiteHex,
    marginBottom: SPACING.space_30,
  },
});

export default Description;
