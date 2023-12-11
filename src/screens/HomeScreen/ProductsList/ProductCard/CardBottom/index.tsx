import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

import {
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../../../../../theme/theme';
import BGIcon from '../BGIcon';
import { CardBottomProps } from '../../../../../types/screens/home';

const CardBottom = ({
  id,
  index,
  price,
  name,
  roasted,
  imagelink_square,
  special_ingredient,
  type,
  prices,
  buttonPressHandler,
}: CardBottomProps) => {
  return (
    <View style={styles.CardBottomRow}>
      <Text style={styles.CardPriceCurrency}>
        $&nbsp;<Text style={styles.CardPrice}>{price}</Text>
      </Text>
      <TouchableOpacity
        onPress={() =>
          buttonPressHandler({
            id,
            index,
            name,
            roasted,
            imagelink_square,
            special_ingredient,
            type,
            price: prices,
          })
        }>
        <BGIcon
          color={COLORS.primaryWhiteHex}
          name="add"
          backgroundColor={COLORS.primaryOrangeHex}
          size={FONTSIZE.size_10}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  CardBottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: SPACING.space_15,
  },
  CardPriceCurrency: {
    fontFamily: FONTFAMILY.poppins_semibold,
    color: COLORS.primaryOrangeHex,
    fontSize: FONTSIZE.size_18,
  },
  CardPrice: {
    color: COLORS.primaryWhiteHex,
  },
});

export default CardBottom;
