import { useReducer } from 'react';

import { InitialPaymentStateType } from '../../../types/reducers';

import { paymentReducer } from '../../../helpers';

const usePayment = () => {
  const INITIAL_STATE: InitialPaymentStateType = {
    paymentMode: 'Credit Card',
  };

  const [state, dispatch] = useReducer(paymentReducer, INITIAL_STATE);

  return { state, dispatch };
};

export default usePayment;
