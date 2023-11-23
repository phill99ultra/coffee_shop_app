import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
  SafeAreaView,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
// import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';

import useHome from './hooks';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../../theme/theme';
import HeaderBar from '../../components/HeaderBar';
import CustomIcon from '../../components/CustomIcon';

function HomeScreen() {
  const {
    state: { searchText },
    dispatch,
  } = useHome();
  // const topBarHeight = useBottomTabBarHeight();

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
          <View style={styles.InputContainer}>
            <TouchableOpacity onPress={() => {}}>
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
              onChangeText={text =>
                dispatch({ type: 'SET_SEARCH_TEXT', payload: text })
              }
            />
          </View>
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
  InputContainer: {
    flexDirection: 'row',
    margin: SPACING.space_30,
    borderRadius: BORDERRADIUS.radius_20,
    backgroundColor: COLORS.primaryDarkGreyHex,
    alignItems: 'center',
  },
  TextInputContainer: {
    height: SPACING.space_20 * 3,
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_14,
    color: COLORS.primaryWhiteHex,
  },
  InputIcon: {
    marginHorizontal: SPACING.space_20,
  },
});

export default HomeScreen;
