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

export type PaymentLinearGradientProps = {
  isIcon: boolean;
} & ChildrenType;

export type PaymentHeaderProps = {
  navigation: PaymentScreenNavigationProp;
};

export type CreditCardProps = {
  paymentMode: string;
  dispatch: React.Dispatch<PaymentActionType>;
};
