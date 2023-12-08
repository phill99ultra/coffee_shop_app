import { StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';

import CustomIcon from '../../../../components/CustomIcon';
import { COLORS, FONTSIZE } from '../../../../theme/theme';
import { SearchResultProps } from '../../../../types/screens/home';

const SearchResult = ({ resetSearchCoffee }: SearchResultProps) => {
  return (
    <TouchableOpacity
      style={styles.SearchClearIcon}
      onPress={() => {
        resetSearchCoffee();
      }}>
      <CustomIcon
        name="close"
        size={FONTSIZE.size_16}
        color={COLORS.primaryLightGreyHex}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  SearchClearIcon: {
    position: 'absolute',
    right: 20,
  },
});

export default SearchResult;
