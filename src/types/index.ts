// TYPES FOR PROPS //
export type HeaderBarProps = {
  title?: string;
};

export type GradientIconProps = {
  name: string;
  color: string;
  size: number;
};

export type PaymentFooterProps = {
  price: string | number;
  currency: string;
  title: string;
  handleBtnPress: () => void;
};
