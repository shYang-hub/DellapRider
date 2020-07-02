import React from 'react';
import { StyleSheet } from 'react-native';
import { Divider, Layout, Text } from '@ui-kitten/components';
import { AccInfoScreenProps } from '../../navigation/home.navigator';
import { Toolbar } from '../../components/toolbar.component';
import { SafeAreaLayout, SafeAreaLayoutElement, SaveAreaInset } from '../../components/safe-area-layout.component';
import ContentView from './layout';

export const AccInfoScreen = (props: AccInfoScreenProps): SafeAreaLayoutElement => (
  <SafeAreaLayout
    style={styles.safeArea}
    insets={SaveAreaInset.TOP}>
    <Toolbar
      title='React Navigation Ex 🐱'
      onBackPress={props.navigation.goBack}
    />
    <Divider/>
    <ContentView navigation={props}/>
  </SafeAreaLayout>
);

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
