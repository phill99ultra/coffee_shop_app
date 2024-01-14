import { useReducer } from 'react';

import { InitialPaymentStateType } from '../../../types/reducers';
import { PaymentScreenNavigationProp } from '../../../types/navigation';

import { paymentReducer } from '../../../helpers';
import { useStateStore } from '../../../hooks/useStateStore';

const usePayment = () => {
  const { calculateCartPrice, addToOrderHistoryList } = useStateStore();

  const INITIAL_STATE: InitialPaymentStateType = {
    paymentMode: 'Credit Card',
    showAnimation: false,
  };

  const [state, dispatch] = useReducer(paymentReducer, INITIAL_STATE);

  const handlePressPayment = (navigation: PaymentScreenNavigationProp) => {
    dispatch({
      type: 'SET_SHOW_ANIMATION',
      payload: true,
    });

    addToOrderHistoryList();
    calculateCartPrice();

    setTimeout(() => {
      dispatch({
        type: 'SET_SHOW_ANIMATION',
        payload: false,
      });

      navigation.navigate('History');
    }, 2000);
  };

  return { state, dispatch, handlePressPayment };
};

export default usePayment;
