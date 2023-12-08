import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import { ItemInfoAreaProps } from '../../../types/screens/item';
import Description from './Description';
import Size from './Size';
import { COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../../../theme/theme';

const ItemInfoArea = ({
  fullDescription,
  description,
  dispatch,
  prices,
  type,
  itemPrice,
}: ItemInfoAreaProps) => {
  return (
    <View style={styles.InfoArea}>
      <Text style={styles.InfoTitle}>Description</Text>
      <Description
        description={description}
        fullDescription={fullDescription}
        dispatch={dispatch}
      />
      <Text style={styles.InfoTitle}>Size</Text>
      <Size
        prices={prices}
        itemPrice={itemPrice}
        type={type}
        dispatch={dispatch}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  InfoArea: {
    padding: SPACING.space_20,
  },
  InfoTitle: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryWhiteHex,
    marginBottom: SPACING.space_10,
  },
});

export default ItemInfoArea;
