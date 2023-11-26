import { useReducer } from 'react';

import {
  getCategoriesFromData,
  getCoffeeList,
  homeReducer,
} from '../../../helpers';
import { StoreType, InitialStateType } from '../../../types';
import { useStore } from '../../../store';

const useHome = () => {
  const coffeeList = useStore((state: StoreType) => state.coffeeList);
  const beansList = useStore((state: StoreType) => state.beansList);
  const categories = getCategoriesFromData(coffeeList);
  const categoryIndex = {
    index: 0,
    category: categories[0],
  };
  const sortedCoffee = getCoffeeList(categoryIndex.category, coffeeList);

  const INITIAL_STATE: InitialStateType = {
    categories: categories,
    searchText: '',
    categoryIndex: categoryIndex,
    sortedCoffee: sortedCoffee,
  };

  const [state, dispatch] = useReducer(homeReducer, INITIAL_STATE);

  return { state, dispatch, coffeeList, beansList };
};

export default useHome;
