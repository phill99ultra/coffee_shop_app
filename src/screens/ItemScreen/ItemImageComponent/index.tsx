import {
  StyleSheet,
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

import { ItemImageProps } from '../../../types';
import GradientIcon from '../../../components/GradientBGIcon';
import { COLORS, FONTSIZE } from '../../../theme/theme';

const ItemImageComponent = ({
  enableBackHandler,
  imagelink_portrait,
  type,
  id,
  favourite,
  name,
  special_ingredient,
  ingredients,
  average_rating,
  ratings_count,
  roasted,
}: ItemImageProps) => {
  return (
    <View>
      <ImageBackground
        style={styles.ItemBackgroundImage}
        source={imagelink_portrait}>
        {enableBackHandler && (
          <View>
            <TouchableOpacity>
              <GradientIcon
                name="left"
                color={COLORS.primaryLightGreyHex}
                size={FONTSIZE.size_16}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <GradientIcon
                name="like"
                color={COLORS.primaryLightGreyHex}
                size={FONTSIZE.size_16}
              />
            </TouchableOpacity>
          </View>
        )}
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  ItemBackgroundImage: {
    width: '100%',
    aspectRatio: 20 / 25,
    justifyContent: 'space-between',
  },
});

export default ItemImageComponent;
