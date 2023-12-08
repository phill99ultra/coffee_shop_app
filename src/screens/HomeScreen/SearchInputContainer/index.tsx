import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import React from 'react';

import CustomIcon from '../../../components/CustomIcon';
import {
  SPACING,
  BORDERRADIUS,
  COLORS,
  FONTSIZE,
  FONTFAMILY,
} from '../../../theme/theme';
import { SearchInputProps } from '../../../types/screens/home';
import SearchResult from './SearchResult';

const SearchInputContainer = ({
  searchText,
  dispatch,
  searchCoffee,
  resetSearchCoffee,
}: SearchInputProps) => {
  return (
    <View style={styles.InputContainer}>
      <TouchableOpacity
        onPress={() => {
          searchCoffee(searchText);
        }}>
        <CustomIcon
          name="search"
          style={styles.InputIcon}
          size={FONTSIZE.size_18}
          color={
            searchText.length > 0
              ? COLORS.primaryOrangeHex
              : COLORS.primaryLightGreyHex
          }
        />
      </TouchableOpacity>
      <TextInput
        placeholder="Find your coffee"
        style={styles.TextInputContainer}
        value={searchText}
        placeholderTextColor={COLORS.primaryLightGreyHex}
        onChangeText={text => {
          dispatch({ type: 'SET_SEARCH_TEXT', payload: text });
          searchCoffee(text);
        }}
      />
      {searchText.length > 0 ? (
        <SearchResult resetSearchCoffee={resetSearchCoffee} />
      ) : (
        <></>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  InputContainer: {
    flexDirection: 'row',
    margin: SPACING.space_30,
    borderRadius: BORDERRADIUS.radius_20,
    backgroundColor: COLORS.primaryDarkGreyHex,
    alignItems: 'center',
  },
  InputIcon: {
    marginHorizontal: SPACING.space_20,
  },
  TextInputContainer: {
    height: SPACING.space_20 * 3,
    width: '80%',
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_14,
    color: COLORS.primaryWhiteHex,
  },
});

export default SearchInputContainer;
