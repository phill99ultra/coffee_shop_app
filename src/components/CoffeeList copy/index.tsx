import { FlatList, StyleSheet } from 'react-native';
import React from 'react';

import { SPACING } from '../../theme/theme';
import CoffeeCard from '../ProductsList/ProductCard';
import { CoffeeListProps } from '../../types';

const CoffeeList = ({ sortedCoffee }: CoffeeListProps) => {
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.FlatListContainer}
      keyExtractor={item => item.id}
      data={sortedCoffee}
      renderItem={({ item }) => (
        <CoffeeCard
          name={item.name}
          imagelink_square={item.imagelink_square}
          average_rating={item.average_rating}
          special_ingredient={item.special_ingredient}
          price={item.prices[2].price}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  FlatListContainer: {
    gap: SPACING.space_20,
    paddingVertical: SPACING.space_20,
    paddingHorizontal: SPACING.space_30,
  },
});

export default CoffeeList;
