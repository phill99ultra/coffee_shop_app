import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

import { CategoriesNavigatorProps } from '../../../types/screens/home';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../../../theme/theme';

import { getCoffeeList } from '../../../helpers';

const CategoriesNavigator = ({
  listRef,
  categories,
  categoryIndex,
  coffeeList,
  dispatch,
}: CategoriesNavigatorProps) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.CategoriesScrollView}>
      {categories.map((category, index) => (
        <View key={category} style={styles.CategoryContainer}>
          <TouchableOpacity
            style={styles.CategoryScrollViewItem}
            onPress={() => {
              listRef?.current?.scrollToOffset({
                animated: true,
                offset: 0,
              });
              dispatch({
                type: 'SET_CATEGORY_INDEX',
                payload: { index: index, category: categories[index] },
              });
              dispatch({
                type: 'SET_SORTED_COFFEE',
                payload: getCoffeeList(categories[index], coffeeList),
              });
            }}>
            <Text
              style={[
                styles.CategoryText,
                categoryIndex === index && { color: COLORS.primaryOrangeHex },
              ]}>
              {category}
            </Text>
            {categoryIndex === index && <View style={styles.ActiveCategory} />}
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  CategoriesScrollView: {
    paddingHorizontal: SPACING.space_20,
    marginBottom: SPACING.space_10,
  },
  ActiveCategory: {
    width: SPACING.space_10,
    height: SPACING.space_10,
    borderRadius: BORDERRADIUS.radius_20,
    backgroundColor: COLORS.primaryOrangeHex,
  },
  CategoryText: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryLightGreyHex,
    marginBottom: SPACING.space_4,
  },
  CategoryContainer: {
    paddingHorizontal: SPACING.space_15,
  },
  CategoryScrollViewItem: {
    alignItems: 'center',
  },
});

export default CategoriesNavigator;
