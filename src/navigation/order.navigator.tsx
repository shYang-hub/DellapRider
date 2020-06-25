import React from 'react';
import { CompositeNavigationProp, RouteProp } from '@react-navigation/core';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { OrderTabNavigationProp } from './home.navigator';
import { AppRoute } from './app-routes';
import { OrderScreen } from '../scenes/main';

type OrderNavigatorParams = {
  [AppRoute.ORDER]: undefined;
}

export interface OrderScreenProps {
  navigation: CompositeNavigationProp< OrderTabNavigationProp, StackNavigationProp<OrderNavigatorParams, AppRoute.ORDER> >;
  route: RouteProp<OrderNavigatorParams, AppRoute.ORDER>;
}

const Stack = createStackNavigator<OrderNavigatorParams>();

export const OrderNavigator = (): React.ReactElement => (
  <Stack.Navigator headerMode='none'>
    <Stack.Screen name={AppRoute.ORDER} component={OrderScreen}/>
  </Stack.Navigator>
);
