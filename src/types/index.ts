import React from 'react';

export type TabType = {
  screenName: string;
  iconName: string;
  screen: () => React.JSX.Element;
};
