import { useReducer, useRef } from 'react';
import { FlatList } from 'react-native';

import {
  getCategoriesFromData,
  getCoffeeList,
  homeReducer,
  filterCoffeeList,
} from '../../../helpers';
import { InitialHomeStateType } from '../../../types/reducers';
import { useStateStore } from '../../../hooks/useStateStore';

const useHome = () => {
  const { coffeeList, beansList } = useStateStore();
  const categories = getCategoriesFromData(coffeeList);
  const categoryIndex = {
    index: 0,
    category: categories[0],
  };
  const sortedCoffee = getCoffeeList(categoryIndex.category, coffeeList);
  const listRef = useRef<FlatList>();

  const INITIAL_STATE: InitialHomeStateType = {
    categories: categories,
    searchText: '',
    categoryIndex: categoryIndex,
    sortedCoffee: sortedCoffee,
  };

  const [state, dispatch] = useReducer(homeReducer, INITIAL_STATE);

  const searchCoffee = (search: string) => {
    if (search !== '') {
      listRef?.current?.scrollToOffset({
        animated: true,
        offset: 0,
      });
      dispatch({
        type: 'SET_CATEGORY_INDEX',
        payload: { index: 0, category: categories[0] },
      });
      dispatch({
        type: 'SET_SORTED_COFFEE',
        payload: filterCoffeeList(coffeeList, search),
      });
    }
  };

  const resetSearchCoffee = () => {
    listRef?.current?.scrollToOffset({
      animated: true,
      offset: 0,
    });
    dispatch({
      type: 'SET_CATEGORY_INDEX',
      payload: { index: 0, category: categories[0] },
    });
    dispatch({
      type: 'SET_SORTED_COFFEE',
      payload: coffeeList,
    });
    dispatch({
      type: 'SET_SEARCH_TEXT',
      payload: '',
    });
  };

  return {
    state,
    dispatch,
    coffeeList,
    beansList,
    listRef,
    searchCoffee,
    resetSearchCoffee,
  };
};

export default useHome;
