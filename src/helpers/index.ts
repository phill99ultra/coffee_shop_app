import {
  DataType,
  CountMapType,
  HomeActionType,
  ItemActionType,
  InitialHomeStateType,
  InitialItemStateType,
} from '../types';

export function getCategoriesFromData(data: DataType[]) {
  const temp: CountMapType = {};

  const temporaryData = data.reduce((accumulator, current) => {
    if (accumulator[current.name] === undefined) {
      accumulator[current.name] = 1;
    } else {
      accumulator[current.name]++;
    }
    return accumulator;
  }, temp);
  let categories = Object.keys(temporaryData);
  categories.unshift('All');
  return categories;
}

export function getCoffeeList(category: string, data: DataType[]) {
  if (category === 'All') {
    return data;
  } else {
    let coffeeList = data.filter((item: DataType) => item.name === category);
    return coffeeList;
  }
}

export function homeReducer(
  state: InitialHomeStateType,
  action: HomeActionType,
): InitialHomeStateType {
  switch (action.type) {
    case 'SET_CATEGORIES':
      return { ...state, categories: action.payload };
    case 'SET_SEARCH_TEXT':
      return { ...state, searchText: action.payload };
    case 'SET_CATEGORY_INDEX':
      return { ...state, categoryIndex: action.payload };
    case 'SET_SORTED_COFFEE':
      return { ...state, sortedCoffee: action.payload };
    default:
      return state;
  }
}

export function filterCoffeeList(
  list: DataType[],
  searchText: string,
): DataType[] {
  return list.filter((item: DataType) =>
    item.name.toLowerCase().includes(searchText.toLowerCase()),
  );
}

export function itemReducer(
  state: InitialItemStateType,
  action: ItemActionType,
): InitialItemStateType {
  switch (action.type) {
    case 'SET_FULL_DESCRIPTION':
      return { ...state, fullDescription: action.payload };
    case 'SET_PRICE':
      return { ...state, price: action.payload };
    default:
      return state;
  }
}
