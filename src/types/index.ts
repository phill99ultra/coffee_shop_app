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

export type FavouriteToggleType = {
  handleToggleFavourite: (favourite: boolean, type: string, id: string) => void;
};

export type ChildrenType = {
  children: React.ReactNode;
};
