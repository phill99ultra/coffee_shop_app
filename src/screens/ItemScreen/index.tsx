import {
  ScrollView,
  View,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import React from 'react';

import { ItemScreenProps } from '../../types';
import { useStore } from '../../store';
import { COLORS } from '../../theme/theme';
import ItemImageComponent from './ItemImageComponent';

function ItemScreen({ route }: ItemScreenProps) {
  const { index: indexParam, type: typeParam } = route.params || {
    index: 0,
    type: '',
  };
  const itemOfIndex = useStore(state =>
    typeParam === 'Coffee' ? state.coffeeList : state.beansList,
  )[indexParam];

  const {
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
    backHandler,
    toggleFavourite,
  } = itemOfIndex;

  return (
    <SafeAreaView style={styles.SafeAreaContainer}>
      <View style={styles.ScreenContainer}>
        <StatusBar backgroundColor={COLORS.primaryBlackHex} />
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.ScrollViewFlex}>
          <ItemImageComponent
            enableBackHandler={true}
            imagelink_portrait={imagelink_portrait}
            type={type}
            id={id}
            favourite={favourite}
            name={name}
            special_ingredient={special_ingredient}
            ingredients={ingredients}
            average_rating={average_rating}
            ratings_count={ratings_count}
            roasted={roasted}
            backHandler={() => {}}
            toggleFavourite={() => {}}
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
});

export default ItemScreen;
