import { StyleSheet, TouchableOpacity, View } from 'react-native';
import React from 'react';

import GradientIcon from '../../../../components/GradientBGIcon';
import { COLORS, FONTSIZE, SPACING } from '../../../../theme/theme';
import { ItemImageBtnsProps } from '../../../../types';

const ImageBtns = ({
  enableBackHandler,
  favourite,
  type,
  id,
  handleBackHandler,
  handleToggleFavourite,
}: ItemImageBtnsProps) => {
  const containerStyles = enableBackHandler
    ? styles.containerSpaceBetween
    : styles.containerFlexEnd;
  return (
    <View style={[styles.ImageHeader, containerStyles]}>
      {enableBackHandler && (
        <TouchableOpacity onPress={() => handleBackHandler()}>
          <GradientIcon
            name="left"
            color={COLORS.primaryLightGreyHex}
            size={FONTSIZE.size_16}
          />
        </TouchableOpacity>
      )}
      <TouchableOpacity
        onPress={() => handleToggleFavourite(favourite, type, id)}>
        <GradientIcon
          name="like"
          color={favourite ? COLORS.primaryRedHex : COLORS.primaryLightGreyHex}
          size={FONTSIZE.size_16}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  ImageHeader: {
    padding: SPACING.space_30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerSpaceBetween: {
    justifyContent: 'space-between',
  },
  containerFlexEnd: {
    justifyContent: 'flex-end',
  },
});

export default ImageBtns;
