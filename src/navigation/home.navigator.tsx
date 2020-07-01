import React from 'react';
import { CompositeNavigationProp, RouteProp } from '@react-navigation/core';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerNavigationProp,
} from '@react-navigation/drawer';
import {
  BottomTabBarProps,
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { OrderNavigator } from './order.navigator';
import { DeliveryNavigator } from './delivery.navigator';
import { DelFinNavigator } from './delFin.navigator';
import { AppRoute } from './app-routes';
import { AboutScreen, HomeDrawer, HomeTabBar } from '../scenes/home';
import { HomeIcon, BullhornIcon, FoodIcon, MotorbikeIcon, CheckboxCircleIcon,
   AccIcon, ShieldAccIcon, CashRefundAccIcon, PointIcon, SettingIcon } from '../assets/icons';

type HomeDrawerNavigatorParams = {
  [AppRoute.NOTICE]: undefined;
  [AppRoute.ACC_INFO]: undefined;
  [AppRoute.ACC_INFO_BNK]: undefined;
  [AppRoute.WITHDRAWAL]: undefined;
  [AppRoute.POINT_RPT]: undefined;
  [AppRoute.DEL_RPT]: undefined;
  [AppRoute.APP_SET]: undefined;
}

type HomeBottomTabsNavigatorParams = {
  [AppRoute.ORDER]: undefined;
  [AppRoute.DELIVERY]: undefined;
  [AppRoute.DEL_FIN]: undefined;
}

export type OrderTabNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<HomeBottomTabsNavigatorParams, AppRoute.ORDER>,
  DrawerNavigationProp<HomeDrawerNavigatorParams, AppRoute.HOME>>;

export type DeliveryTabNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<HomeBottomTabsNavigatorParams, AppRoute.DELIVERY>,
  DrawerNavigationProp<HomeDrawerNavigatorParams, AppRoute.HOME>>;

export type DelFinTabNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<HomeBottomTabsNavigatorParams, AppRoute.DEL_FIN>,
  DrawerNavigationProp<HomeDrawerNavigatorParams, AppRoute.HOME>>;

export interface AboutScreenProps {
  navigation: DrawerNavigationProp<HomeDrawerNavigatorParams, AppRoute.ABOUT>;
  route: RouteProp<HomeDrawerNavigatorParams, AppRoute.ABOUT>;
}

export type BottomHomeScreenProps = BottomTabBarProps & {
  navigation: OrderTabNavigationProp;
};

export type DrawerHomeScreenProps = DrawerContentComponentProps & {
  navigation: DrawerNavigationProp<HomeDrawerNavigatorParams, AppRoute.HOME>;
};

const Drawer = createDrawerNavigator<HomeDrawerNavigatorParams>();
const BottomTab = createBottomTabNavigator<HomeBottomTabsNavigatorParams>();

// FIXME(REACT-NAVIGATION-5): Not able to disable a pan gesture.
//
// In v4, it was possible with `navigationOptions: { gesturesEnabled: false }`
// Basically, I want to do this to disable `back` navigation from home screen to auth
// For Android, it can be covered with custom BackHandler.
//
// I'm not sure if it is a "true way", but I find it better
// rather than hard-coding business logic in navigators
// like it is described in https://reactnavigation.org/docs/en/next/auth-flow.html

const HomeBottomNavigator = (): React.ReactElement => (
  // @ts-ignore: `tabBar` also contains a DrawerNavigationProp
  <BottomTab.Navigator tabBar={HomeTabBar}>
    <BottomTab.Screen
      name={AppRoute.ORDER}
      component={OrderNavigator}
      options={{ title: '주문', tabBarIcon: FoodIcon }}
    />
    <BottomTab.Screen
      name={AppRoute.DELIVERY}
      component={DeliveryNavigator}
      options={{ title: '배달중', tabBarIcon: MotorbikeIcon }}
    />
    <BottomTab.Screen
      name={AppRoute.DEL_FIN}
      component={DelFinNavigator}
      options={{ title: '완료', tabBarIcon: CheckboxCircleIcon }}
    />
  </BottomTab.Navigator>
);

export const HomeNavigator = (): React.ReactElement => (
  // @ts-ignore: `drawerContent` also contains a DrawerNavigationProp
  <Drawer.Navigator drawerContent={HomeDrawer}>
    <Drawer.Screen
      name={AppRoute.HOME}
      component={HomeBottomNavigator}
      options={{ title: '홈', drawerIcon: HomeIcon }}
    />
    <Drawer.Screen
      name={AppRoute.NOTICE}
      component={AboutScreen}
      options={{ title: '공지', drawerIcon: BullhornIcon }}
    />
    <Drawer.Screen
      name={AppRoute.ACC_INFO}
      component={AboutScreen}
      options={{ title: '계정정보', drawerIcon: AccIcon }}
    />
    <Drawer.Screen
      name={AppRoute.ACC_INFO_BNK}
      component={AboutScreen}
      options={{ title: '계좌정보', drawerIcon: ShieldAccIcon }}
    />
    <Drawer.Screen
      name={AppRoute.WITHDRAWAL}
      component={AboutScreen}
      options={{ title: '출금', drawerIcon: CashRefundAccIcon }}
    />
    <Drawer.Screen
      name={AppRoute.POINT_RPT}
      component={AboutScreen}
      options={{ title: '포인트내역', drawerIcon: PointIcon }}
    />
    <Drawer.Screen
      name={AppRoute.DEL_RPT}
      component={AboutScreen}
      options={{ title: '대행내역', drawerIcon: MotorbikeIcon}}
    />
    <Drawer.Screen
      name={AppRoute.APP_SET}
      component={AboutScreen}
      options={{ title: '설정', drawerIcon: SettingIcon }}
    />
  </Drawer.Navigator>
);
