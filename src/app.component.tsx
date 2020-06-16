import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { light, mapping } from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { AppNavigator } from './navigation/app.navigator';
import { AppRoute } from './navigation/app-routes';
import Reactotron from 'reactotron-react-native'

export default (): React.ReactFragment => {

Reactotron.log('hello rendering world');
  // This value is used to determine the initial screen
  const isAuthorized: boolean = true;

  return (
    <React.Fragment>
      <IconRegistry icons={EvaIconsPack}/>
      <ApplicationProvider
        mapping={mapping}
        theme={light}>
        <SafeAreaProvider>
          <NavigationContainer>
            <AppNavigator initialRouteName={isAuthorized ? AppRoute.HOME : AppRoute.AUTH}/>
          </NavigationContainer>
        </SafeAreaProvider>
      </ApplicationProvider>
    </React.Fragment>
  );
};
