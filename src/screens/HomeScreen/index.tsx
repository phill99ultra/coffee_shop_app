import React from 'react';
import { StyleSheet, ScrollView, Text } from 'react-native';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import Toast from 'react-native-toast-message';

import { HomeScreenProps } from '../../types/navigation';
import { COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../../theme/theme';

import HeaderBar from '../../components/HeaderBar';
import SearchInputContainer from './SearchInputContainer';
import CategoriesNavigator from './CategoriesNavigator';
import ProductsList from './ProductsList';
import ScreenContainer from '../../hoc/ScreenContainer';

import useHome from './hooks';
import { useAddToCart } from '../../hooks/useAddToCart';

function HomeScreen({ navigation }: HomeScreenProps) {
  const {
    state: { searchText, categories, categoryIndex, sortedCoffee },
    dispatch,
    coffeeList,
    beansList,
    listRef,
    searchCoffee,
    resetSearchCoffee,
  } = useHome();
  const { handleAddToCart } = useAddToCart();

  const topBarHeight = useBottomTabBarHeight();

  return (
    <ScreenContainer>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ScrollViewFlex}>
        <HeaderBar />
        <Text style={styles.ScreenTitle}>
          Find the best
          {'\n'}
          coffee for you
        </Text>
        <SearchInputContainer
          searchText={searchText}
          dispatch={dispatch}
          searchCoffee={searchCoffee}
          resetSearchCoffee={resetSearchCoffee}
        />
        <CategoriesNavigator
          listRef={listRef}
          categories={categories}
          categoryIndex={categoryIndex.index}
          coffeeList={coffeeList}
          dispatch={dispatch}
        />
        <ProductsList
          listRef={listRef}
          products={sortedCoffee}
          coffee={true}
          navigation={navigation}
          handleAddToCart={handleAddToCart}
        />
        <Text style={styles.CoffeeBeansTitle}>Coffee Beans</Text>
        <ProductsList
          products={beansList}
          topBarHeight={topBarHeight}
          navigation={navigation}
          handleAddToCart={handleAddToCart}
        />
      </ScrollView>
      <Toast position="bottom" bottomOffset={80} />
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  ScrollViewFlex: {
    flexGrow: 1,
  },
  ScreenTitle: {
    fontSize: FONTSIZE.size_28,
    fontFamily: FONTFAMILY.poppins_semibold,
    color: COLORS.primaryWhiteHex,
    paddingLeft: SPACING.space_30,
  },
  CoffeeBeansTitle: {
    fontSize: FONTSIZE.size_18,
    marginLeft: SPACING.space_30,
    marginTop: SPACING.space_20,
    fontFamily: FONTFAMILY.poppins_medium,
    color: COLORS.secondaryLightGreyHex,
  },
});

export default HomeScreen;
