import { create } from 'zustand';
import { devtools, persist, createJSONStorage } from 'zustand/middleware';
// import { produce } from 'immer';
import AsyncStorage from '@react-native-async-storage/async-storage';

import CoffeeData from '../data/CoffeeData';
import BeansData from '../data/BeansData';
import { StoreType } from '../types';

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
      }),
      {
        name: 'coffee-app',
        storage: createJSONStorage(() => AsyncStorage),
      },
    ),
  ),
);
