import { useReducer } from 'react';

import { INITIAL_PAYMENT_STATE } from '../../../constants';

import { useStateStore } from '../../../hooks/useStateStore';
import { paymentReducer } from '../../../helpers';

const useOrderHistory = () => {
  const { orderHistoryList } = useStateStore();

  const [state, dispatch] = useReducer(paymentReducer, INITIAL_PAYMENT_STATE);

  const handlePressDownload = () => {
    dispatch({
      type: 'SET_SHOW_ANIMATION',
      payload: true,
    });

    setTimeout(() => {
      dispatch({
        type: 'SET_SHOW_ANIMATION',
        payload: false,
      });
    }, 2000);
  };

  return { orderHistoryList, state, dispatch, handlePressDownload };
};

export default useOrderHistory;
