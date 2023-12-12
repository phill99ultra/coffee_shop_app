import { create } from 'zustand';
import { devtools, persist, createJSONStorage } from 'zustand/middleware';
import { produce } from 'immer';
import AsyncStorage from '@react-native-async-storage/async-storage';

import CoffeeData from '../data/CoffeeData';
import BeansData from '../data/BeansData';
import { StoreType, PriceType, DataType, CartItem } from '../types/data';

export const useStore = create<StoreType>()(
  devtools(
    persist(
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      (set, get) => ({
        coffeeList: CoffeeData,
        beansList: BeansData,
        cartPrice: 0,
        favouritesList: [],
        cartList: [],
        orderHistoryList: [],
        addToCart: (cartItem: CartItem) =>
          set(
            produce(state => {
              const existingCartItem = state.cartList.find(
                (item: DataType) => item.id === cartItem.id,
              );

              if (existingCartItem) {
                const existingPrice = existingCartItem.prices.find(
                  (price: PriceType) => price.size === cartItem.prices[0].size,
                );

                if (existingPrice) {
                  existingPrice.quantity++;
                } else {
                  existingCartItem.prices.push(cartItem.prices[0]);
                }

                existingCartItem.prices.sort((a: PriceType, b: PriceType) =>
                  b.size.localeCompare(a.size),
                );
              } else {
                state.cartList.push(cartItem);
              }
            }),
          ),
        calculateCartPrice: () =>
          set(
            produce(state => {
              let totalPrice = 0;

              state.cartList.forEach((cartItem: DataType) => {
                const tempPrice = cartItem.prices.reduce((acc, price) => {
                  const priceValue =
                    (parseFloat(price.price) || 0) * (price.quantity || 1);
                  return acc + priceValue;
                }, 0);

                cartItem.item_price = tempPrice.toFixed(2).toString();
                totalPrice += tempPrice;
              });

              state.cartPrice = totalPrice.toFixed(2).toString();
            }),
          ),
        addToFavouriteList: (type: string, id: string) =>
          set(
            produce(state => {
              const targetList =
                type === 'Coffee' ? state.coffeeList : state.beansList;

              const targetItem = targetList.find(
                (item: DataType) => item.id === id,
              );

              if (targetItem && !targetItem.favourite) {
                targetItem.favourite = true;
                state.favouritesList.unshift(targetItem);
              }
            }),
          ),
        deleteFromFavouriteList: (type: string, id: string) =>
          set(
            produce(state => {
              const targetList =
                type === 'Coffee' ? state.coffeeList : state.beansList;

              const targetItem = targetList.find(
                (item: DataType) => item.id === id,
              );

              if (targetItem && targetItem.favourite) {
                targetItem.favourite = false;
              }

              const spliceIndex = state.favouritesList.findIndex(
                (item: DataType) => item.id === id,
              );

              if (spliceIndex !== -1) {
                state.favouritesList.splice(spliceIndex, 1);
              }
            }),
          ),
        incrementCartItemQuantity: (id: string, size: string) =>
          set(
            produce(state => {
              const cartItemIndex = state.cartList.findIndex(
                (item: DataType) => item.id === id,
              );

              if (cartItemIndex !== -1) {
                const priceIndex = state.cartList[
                  cartItemIndex
                ].prices.findIndex((price: PriceType) => price.size === size);

                if (priceIndex !== -1) {
                  state.cartList[cartItemIndex].prices[priceIndex].quantity++;
                }
              }
            }),
          ),
        decrementCartItemQuantity: (id: string, size: string) =>
          set(
            produce(state => {
              const cartItemIndex = state.cartList.findIndex(
                (item: DataType) => item.id === id,
              );

              if (cartItemIndex !== -1) {
                const priceIndex = state.cartList[
                  cartItemIndex
                ].prices.findIndex((price: PriceType) => price.size === size);

                if (priceIndex !== -1) {
                  const currentPrice =
                    state.cartList[cartItemIndex].prices[priceIndex];

                  if (currentPrice.quantity > 1) {
                    currentPrice.quantity--;
                  } else {
                    state.cartList[cartItemIndex].prices.splice(priceIndex, 1);

                    if (state.cartList[cartItemIndex].prices.length === 0) {
                      state.cartList.splice(cartItemIndex, 1);
                    }
                  }
                }
              }
            }),
          ),
        addToOrderHistoryList: () =>
          set(
            produce(state => {
              const tempCartTotal = state.cartList.reduce(
                (accum: number, currentValue: DataType) => {
                  const itemPrice = currentValue.item_price;
                  if (itemPrice !== undefined) {
                    return accum + parseFloat(itemPrice);
                  }
                  return accum;
                },
                0,
              );

              state.orderHistoryList.unshift({
                orderDate: `${new Date().toDateString()} ${new Date().toLocaleDateString()}`,
                cartList: state.cartList,
                cartListTotalPrice: tempCartTotal.toFixed(2).toString(),
              });

              state.cartList = [];
            }),
          ),
        reset: () =>
          set(
            produce(state => {
              state.cartList = [];
            }),
          ),
      }),
      {
        name: 'coffee-app',
        storage: createJSONStorage(() => AsyncStorage),
      },
    ),
  ),
);
