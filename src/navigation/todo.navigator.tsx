import React from 'react';
import { CompositeNavigationProp, RouteProp } from '@react-navigation/core';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import {
  createMaterialTopTabNavigator,
  MaterialTopTabBarProps,
  MaterialTopTabNavigationProp,
} from '@react-navigation/material-top-tabs';
import { TodoTabNavigationProp } from './home.navigator';
import { AppRoute } from './app-routes';
import {
  TodoDetailsRouteParams,
  TodoDetailsScreen,
  TodoInProgressScreen,
  TodoTabBar,
} from '../scenes/todo';
import { DoneAllIcon, GridIcon } from '../assets/icons';

type TodoNavigatorParams = {
  [AppRoute.TODO]: undefined;
  [AppRoute.TODO_DETAILS]: TodoDetailsRouteParams;
}

export type TodoScreenProps = MaterialTopTabBarProps & {
  navigation: TodoTabNavigationProp;
}

export interface TodoDetailsScreenProps {
  navigation: StackNavigationProp<TodoNavigatorParams, AppRoute.TODO_DETAILS>;
  route: RouteProp<TodoNavigatorParams, AppRoute.TODO_DETAILS>;
}

const Stack = createStackNavigator<TodoNavigatorParams>();

// FIXME: Is it possible to track swipe progress?
//
// In this case, it's needed to synchronize tab-bar indicator in TodoScreen
// Currently I have set `swipeEnabled` to `false` just for saving navigation consistence

export const TodoNavigator = (): React.ReactElement => (
  <Stack.Navigator headerMode='none'>
    <Stack.Screen name={AppRoute.TODO_IN_PROGRESS} component={TodoInProgressScreen}/>
    <Stack.Screen name={AppRoute.TODO_DETAILS} component={TodoDetailsScreen}/>
  </Stack.Navigator>
);
