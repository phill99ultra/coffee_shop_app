import { ScrollView, StyleSheet } from 'react-native';
import React, { useReducer } from 'react';

import { InitialItemStateType } from '../../types/reducers';
import { ItemScreenProps } from '../../types/navigation';

import ImageBackgroundInfo from '../../components/ImageBackgroundInfo';
import ItemInfoArea from './ItemInfoArea';
import PaymentFooter from '../../components/PaymentFooter';
import ScreenContainer from '../../hoc/ScreenContainer';

import useItem from './hooks';
import { itemReducer } from '../../helpers';
import { useAddToCart } from '../../hooks/useAddToCart';

function ItemScreen({ navigation, route }: ItemScreenProps) {
  const { index: indexParam, type: typeParam } = route.params || {
    index: 0,
    type: '',
  };

  const { handleGetItemOfIndex, handleNavigateBack, handleToggleFavourite } =
    useItem();
  const { handleAddToCart } = useAddToCart();

  const {
    imagelink_portrait,
    type: typeOfItem,
    id: idOfItem,
    favourite: favouriteOfItem,
    index: indexOfItem,
    name,
    imagelink_square,
    special_ingredient,
    ingredients,
    average_rating,
    ratings_count,
    roasted,
    description,
    prices,
  } = handleGetItemOfIndex(indexParam, typeParam);

  const INITIAL_STATE: InitialItemStateType = {
    fullDescription: false,
    price: prices[0],
  };

  const [state, dispatch] = useReducer(itemReducer, INITIAL_STATE);
  const { fullDescription, price } = state;
  const { price: itemPrice, currency } = price;

  return (
    <ScreenContainer>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ScrollViewFlex}>
        <ImageBackgroundInfo
          enableBackHandler={true}
          imagelink_portrait={imagelink_portrait}
          type={typeOfItem}
          id={idOfItem}
          favourite={favouriteOfItem}
          name={name}
          special_ingredient={special_ingredient}
          ingredients={ingredients}
          average_rating={average_rating}
          ratings_count={ratings_count}
          roasted={roasted}
          handleBackHandler={handleNavigateBack(navigation)}
          handleToggleFavourite={handleToggleFavourite}
        />
        <ItemInfoArea
          fullDescription={fullDescription}
          description={description}
          dispatch={dispatch}
          prices={prices}
          itemPrice={price}
          type={typeOfItem}
        />
        <PaymentFooter
          price={itemPrice}
          currency={currency}
          title="Add to Cart"
          handleBtnPress={() =>
            handleAddToCart(
              {
                id: idOfItem,
                index: indexOfItem,
                name: name,
                roasted: roasted,
                imagelink_square: imagelink_square,
                special_ingredient: special_ingredient,
                type: typeOfItem,
                price: price,
              },
              navigation,
            )
          }
        />
      </ScrollView>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  ScrollViewFlex: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
});

export default ItemScreen;
