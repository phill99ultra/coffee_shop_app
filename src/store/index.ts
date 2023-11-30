import { create } from 'zustand';
import { devtools, persist, createJSONStorage } from 'zustand/middleware';
import { produce } from 'immer';
import AsyncStorage from '@react-native-async-storage/async-storage';

import CoffeeData from '../data/CoffeeData';
import BeansData from '../data/BeansData';
import { StoreType, PriceType, DataType } from '../types';

export const useStore = create<StoreType>()(
  devtools(
    persist(
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      (set, get) => ({
        coffeeList: CoffeeData,
        beansList: BeansData,
        cartAmount: 0,
        favoritesList: [],
        cartList: [],
        orderHistoryList: [],
        // addToCart: (cartItem: any) =>
        //   set(
        //     produce(state => {
        //       let found = false;
        //       for (let i = 0; i < state.cartList.length; i++) {
        //         if (state.cartList[i].id === cartItem.id) {
        //           found = true;
        //           let size = false;
        //           for (let j = 0; j < state.cartList[i].prices.length; j++) {
        //             if (
        //               state.cartList[i].prices[j].size ===
        //               cartItem.prices[0].size
        //             ) {
        //               size = true;
        //               state.cartList[i].prices[j].quantity++;
        //               break;
        //             }
        //           }
        //           if (size === false) {
        //             state.cartList[i].prices.push(cartItem.prices[0]);
        //           }
        //           state.cartList[i].prices.sort(
        //             (a: PriceType, b: PriceType) => {
        //               if (a.size > b.size) {
        //                 return -1;
        //               }
        //               if (a.size < b.size) {
        //                 return 1;
        //               }
        //               return 0;
        //             },
        //           );
        //           break;
        //         }
        //       }
        //       if (found === false) {
        //         state.cartList.push(cartItem);
        //       }
        //     }),
        //   ),
        addToCart: (cartItem: any) =>
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
        // calculateCartPrice: () =>
        //   set(
        //     produce(state => {
        //       let totalPrice = 0;
        //       for (let i = 0; i < state.cartList.length; i++) {
        //         let tempPrice = 0;
        //         for (let j = 0; j < state.cartList[i].prices.length; j++) {
        //           tempPrice =
        //             tempPrice +
        //             parseFloat(state.cartList[i].prices[j].price) *
        //               state.cartList[i].prices[j].quantity;
        //         }
        //         state.cartList[i].itemPrice = tempPrice.toFixed(2).toString();
        //         totalPrice = totalPrice + tempPrice;
        //       }
        //       state.cartPrice = totalPrice.toFixed(2).toString();
        //     }),
        //   ),
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
        addToFavorite: (type: string, id: string) =>
          set(
            // produce(state => {
            //   if (type === 'Coffee') {
            //     for (let i = 0; i < state.coffeeList.length; i++) {
            //       if (state.coffeeList[i].id === id) {
            //         if (state.coffeeList[i].favourite === false) {
            //           state.coffeeList[i].favourite = true;
            //           state.favoritesList.unshift(state.coffeeList[i]);
            //         }
            //         break;
            //       }
            //     }
            //   } else if (type === 'Bean') {
            //     for (let i = 0; i < state.beansList.length; i++) {
            //       if (state.beansList[i].id === id) {
            //         if (state.beansList[i].favourite === false) {
            //           state.beansList[i].favourite = true;
            //           state.favoritesList.unshift(state.beansList[i]);
            //         }
            //         break;
            //       }
            //     }
            //   }
            // }),
            produce(state => {
              const targetList =
                type === 'Coffee' ? state.coffeeList : state.beansList;

              const targetItem = targetList.find(
                (item: DataType) => item.id === id,
              );

              if (targetItem && !targetItem.favourite) {
                targetItem.favourite = true;
                state.favoritesList.unshift(targetItem);
              }
            }),
          ),
        deleteFromFavoriteList: (type: string, id: string) =>
          set(
            // produce(state => {
            //   if (type === 'Coffee') {
            //     for (let i = 0; i < state.coffeeList.length; i++) {
            //       if (state.coffeeList[i].id === id) {
            //         if (state.coffeeList[i].favourite === true) {
            //           state.coffeeList[i].favourite = false;
            //         }
            //         break;
            //       }
            //     }
            //   } else if (type === 'Bean') {
            //     for (let i = 0; i < state.beansList.length; i++) {
            //       if (state.beansList[i].id === id) {
            //         if (state.beansList[i].favourite === true) {
            //           state.beansList[i].favourite = false;
            //         }
            //         break;
            //       }
            //     }
            //   }
            //   let spliceIndex = -1;
            //   for (let i = 0; i < state.favoritesList.length; i++) {
            //     if (state.favoritesList[i].id === id) {
            //       spliceIndex = i;
            //       break;
            //     }
            //   }
            //   state.favoritesList.splice(spliceIndex, 1);
            // }),
            produce(state => {
              const targetList =
                type === 'Coffee' ? state.coffeeList : state.beansList;

              const targetItem = targetList.find(
                (item: DataType) => item.id === id,
              );

              if (targetItem && targetItem.favourite) {
                targetItem.favourite = false;
              }

              const spliceIndex = state.favoritesList.findIndex(
                (item: DataType) => item.id === id,
              );

              if (spliceIndex !== -1) {
                state.favoritesList.splice(spliceIndex, 1);
              }
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
