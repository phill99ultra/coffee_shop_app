import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
  SafeAreaView,
  Text,
} from 'react-native';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';

import useHome from './hooks';
import { COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../../theme/theme';
import HeaderBar from '../../components/HeaderBar';
import SearchInputContainer from '../../components/SearchInputContainer';
import CategoriesNavigator from '../../components/CategoriesNavigator';
import ProductsList from '../../components/ProductsList';

function HomeScreen() {
  const {
    state: { searchText, categories, categoryIndex, sortedCoffee },
    dispatch,
    coffeeList,
    beansList,
    listRef,
    searchCoffee,
    resetSearchCoffee,
  } = useHome();

  const topBarHeight = useBottomTabBarHeight();

  // console.log('sorted coffee ', sortedCoffee.length);

  return (
    <SafeAreaView style={styles.SafeAreaContainer}>
      <View style={styles.ScreenContainer}>
        <StatusBar backgroundColor={COLORS.primaryBlackHex} />
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
          />
          <Text style={styles.CoffeeBeansTitle}>Coffee Beans</Text>
          <ProductsList products={beansList} topBarHeight={topBarHeight} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  SafeAreaContainer: {
    flex: 1,
    backgroundColor: COLORS.primaryBlackHex,
  },
  ScreenContainer: {
    flex: 1,
    backgroundColor: COLORS.primaryBlackHex,
  },
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
