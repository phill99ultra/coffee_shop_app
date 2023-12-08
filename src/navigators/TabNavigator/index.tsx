import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { BlurView } from '@react-native-community/blur';
import CustomIcon from '../../components/CustomIcon';
import { COLORS } from '../../theme/theme';
import { TAB_VALUES } from '../../constants';
import { TabType } from '../../types/navigation';

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyle,
        tabBarBackground: () => (
          <BlurView
            overlayColor=""
            blurAmount={15}
            style={styles.blurViewStyles}
          />
        ),
      }}>
      {TAB_VALUES.map((element: TabType) => (
        <Tab.Screen
          key={element.id}
          name={element.screenName}
          component={element.screen}
          options={{
            tabBarIcon: ({ focused }) => (
              <CustomIcon
                name={element.iconName}
                size={25}
                color={
                  focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex
                }
              />
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBarStyle: {
    height: 80,
    position: 'absolute',
    backgroundColor: COLORS.primaryBlackRGBA,
    borderTopWidth: 0,
    elevation: 0,
    borderTopColor: 'transparent',
  },
  blurViewStyles: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default TabNavigator;
