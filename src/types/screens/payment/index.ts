import { StyleProp, ViewStyle } from 'react-native';
import { AnimationObject } from 'lottie-react-native';

import { ChildrenType, PaymentListType } from '../..';
import { PaymentScreenNavigationProp } from '../../navigation';
import { PaymentActionType } from '../../reducers';

export type PaymentOptionsProps = {
  options: PaymentListType[];
  paymentMode: string;
  dispatch: React.Dispatch<PaymentActionType>;
};

export type PaymentMethodProps = {
  paymentMode: string;
  dispatch: React.Dispatch<PaymentActionType>;
} & PaymentListType;

export type LinearGradientProps = {
  style: StyleProp<ViewStyle>;
} & ChildrenType;

export type PaymentHeaderProps = {
  navigation: PaymentScreenNavigationProp;
};

export type CreditCardProps = {
  paymentMode: string;
  dispatch: React.Dispatch<PaymentActionType>;
};

export type AnimationProps = {
  source:
    | string
    | AnimationObject
    | {
        uri: string;
      }
    | undefined;
  style: StyleProp<ViewStyle>;
};
