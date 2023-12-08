import { DataType, PriceType } from '..';

export type HomeActionType =
  | { type: 'SET_CATEGORIES'; payload: string[] }
  | { type: 'SET_SEARCH_TEXT'; payload: string }
  | { type: 'SET_CATEGORY_INDEX'; payload: { index: number; category: string } }
  | { type: 'SET_SORTED_COFFEE'; payload: DataType[] };

export type ItemActionType =
  | { type: 'SET_FULL_DESCRIPTION'; payload: boolean }
  | { type: 'SET_PRICE'; payload: PriceType };

export type InitialHomeStateType = {
  categories: string[];
  searchText: string;
  categoryIndex: { index: number; category: string };
  sortedCoffee: DataType[];
};

export type InitialItemStateType = {
  fullDescription: boolean;
  price: PriceType;
};
