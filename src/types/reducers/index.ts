import { DataType, PriceType } from '../data';

export type HomeActionType =
  | { type: 'SET_CATEGORIES'; payload: string[] }
  | { type: 'SET_SEARCH_TEXT'; payload: string }
  | { type: 'SET_CATEGORY_INDEX'; payload: { index: number; category: string } }
  | { type: 'SET_SORTED_COFFEE'; payload: DataType[] };

export type ItemActionType =
  | { type: 'SET_FULL_DESCRIPTION'; payload: boolean }
  | { type: 'SET_PRICE'; payload: PriceType };

export type PaymentActionType =
  | { type: 'SET_PAYMENT_MODE'; payload: string }
  | { type: 'SET_SHOW_ANIMATION'; payload: boolean };

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

export type InitialPaymentStateType = {
  paymentMode: string;
  showAnimation: boolean;
};
