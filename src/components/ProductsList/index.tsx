import { FlatList, StyleSheet } from 'react-native';
import React from 'react';

import { SPACING } from '../../theme/theme';
import ProductCard from './ProductCard';
import { ProductsListProps } from '../../types';
import EmptyList from './EmptyList';

const ProductsList = ({
  listRef,
  products,
  topBarHeight,
  coffee,
  navigation,
}: ProductsListProps) => {
  return (
    <FlatList
      ref={listRef}
      horizontal
      showsHorizontalScrollIndicator={false}
      ListEmptyComponent={coffee ? <EmptyList /> : null}
      style={[
        styles.FlatListContainer,
        { marginBottom: topBarHeight && topBarHeight },
      ]}
      keyExtractor={item => item.id}
      data={products}
      renderItem={({ item }) => (
        <ProductCard
          name={item.name}
          imagelink_square={item.imagelink_square}
          average_rating={item.average_rating}
          special_ingredient={item.special_ingredient}
          price={item.prices[2].price}
          navigation={navigation}
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

export default ProductsList;
