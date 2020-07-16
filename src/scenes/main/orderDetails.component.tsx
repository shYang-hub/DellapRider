import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Layout, LayoutElement, Text } from '@ui-kitten/components';
import { EdgeInsets, useSafeArea } from 'react-native-safe-area-context';
import { OrderDetailsScreenProps } from '../../navigation/order.navigator';
import { Toolbar } from '../../components/toolbar.component';
import { ImageOverlay } from '../../components/image-overlay.component';
import { ProgressBar } from '../../components/progress-bar.component';
import { Order } from '../../data/order.model';

export type OrderDetailsRouteParams = {
  order: Order;
}

export const OrderDetailsScreen = (props: OrderDetailsScreenProps): LayoutElement => {

  const { order } = props.route.params;
  const insets: EdgeInsets = useSafeArea();

  return (
    <React.Fragment>
      <Layout style={styles.container}>
        <Toolbar
        appearance='control'
        onBackPress={props.navigation.goBack}
        />
        <View style={styles.detailsContainer}>
          <Text
            style={styles.title}
            category='h4'>
            {order.dlvryNo}
          </Text>
          <Text style={styles.title}>
            {order.stoId}
          </Text>
        </View>
        <Button
          onPress={props.navigation.goBack}>
          COMPLETE
        </Button>
      </Layout>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingVertical: 4,
    paddingHorizontal: 16,
  },
  detailsContainer: {
    flex: 1,
  },
  appBar: {
    height: 192,
  },
  title: {
    marginVertical: 4,
  },
  progressBar: {
    width: '50%',
    marginVertical: 16,
  },
});
