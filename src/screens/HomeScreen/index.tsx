import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
  SafeAreaView,
  Text,
} from 'react-native';
// import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';

import useHome from './hooks';
import { COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../../theme/theme';
import HeaderBar from '../../components/HeaderBar';
import SearchInputContainer from '../../components/SearchInputContainer';
import CategoriesNavigator from '../../components/CategoriesNavigator';

function HomeScreen() {
  const {
    state: { searchText, categories, categoryIndex },
    dispatch,
    coffeeList,
  } = useHome();
  // const topBarHeight = useBottomTabBarHeight();

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
          <SearchInputContainer searchText={searchText} dispatch={dispatch} />
          <CategoriesNavigator
            categories={categories}
            categoryIndex={categoryIndex.index}
            coffeeList={coffeeList}
            dispatch={dispatch}
          />
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
});

export default HomeScreen;
