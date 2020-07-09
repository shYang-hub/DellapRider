import React from 'react';
import { ListRenderItemInfo, View } from 'react-native';
import {
  Button,
  Divider,
  Input,
  Layout,
  List,
  ListElement,
  ListItem,
  ListItemElement,
  StyleService,
  Text,
  useStyleSheet,
  Card,
} from '@ui-kitten/components';
import { OrderScreenProps } from '../../navigation/order.navigator';
import { AppRoute } from '../../navigation/app-routes';
import { ProgressBar } from '../../components/progress-bar.component';
import { SearchIcon } from '../../assets/icons';
import { Todo } from '../../data/todo.model';
import { Toolbar } from '../../components/toolbar.component';
import { MenuIcon, CreditCardIcon } from '../../assets/icons';

import Reactotron from 'reactotron-react-native'

const allTodos: Todo[] = [
  Todo.mocked0(),
  Todo.mocked1(),
  Todo.mocked2(),
  Todo.mocked0(),
  Todo.mocked1(),
  Todo.mocked2(),
  Todo.mocked0(),
  Todo.mocked1(),
  Todo.mocked2(),
];

export const OrderScreen = (props: OrderScreenProps): ListElement => {

  const [todos, setTodos] = React.useState<Todo[]>(allTodos);
  const [query, setQuery] = React.useState<string>('');
  const styles = useStyleSheet(themedStyles);

  const onChangeQuery = (query: string): void => {
    const nextTodos: Todo[] = allTodos.filter((todo: Todo): boolean => {
      return todo.title.toLowerCase().includes(query.toLowerCase());
    });
    setTodos(nextTodos);
    setQuery(query);
  };

  const navigateOrderDetails = (todoIndex: number): void => {
    const { [todoIndex]: todo } = todos;
    props.navigation.navigate(AppRoute.ORDER_DETAILS, { todo });
  };

  const renderOrder = ({ item, index }: ListRenderItemInfo<Todo>): ListItemElement => (
    <Card style={styles.card} status='warning' onPress={() => navigateOrderDetails(index)}>
      <View style={styles.cardBody}>
        <View>
          <Text category='s1'>
          맘스터치 전포점
          </Text>

          <Text category='s1'>
          부산진구 전포동 xx번지
          </Text>

          <View style={ styles.test }>
            <View style={styles.controlContainer}>
              <Text status='control'>카드</Text>
            </View>
            <Text category='s1' style={{ marginTop:4}}>
            25,000 | 3,000 | 1.9 Km
            </Text>
          </View>
        </View>

        <View style={styles.controlContainer1}>
          <Text status='control'>
            5분
          </Text>
        </View>
      </View>
    </Card>
  );

  return (
    <Layout style={styles.container}>
      <Toolbar
        title='14,000'
        backIcon={MenuIcon}
        onBackPress={props.navigation.toggleDrawer}
      />
      <Divider/>
      <View style = { styles.buttonArea } >
        <Button
          style={ styles.button }
          size='tiny'
          status= 'info'
          appearance='filled'>
          전  체
        </Button>
        <Button
          style={ styles.button }
          size='tiny'
          status= 'info'
          appearance='outline'>
          관  할
        </Button>
        <Button
          style={ styles.button }
          size='tiny'
          status= 'info'
          appearance='ghost'>
          공  유
        </Button>
      </View>
      <List
        style={styles.list}
        data={todos}
        renderItem={renderOrder}
      />
    </Layout>
  );
};

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  filterInput: {
    marginTop: 16,
    marginHorizontal: 8,
  },
  list: {
    flex: 1,
    backgroundColor: 'background-basic-color-1',
  },
  buttonArea:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
  },
  button:{
    width: 80,
  },
  test:{
    flexDirection: 'row',
  },
  card: {
    margin: 2,
    height: 100,
  },
  controlContainer: {
    borderRadius: 6,
    margin: 4,
    paddingHorizontal: 4,
    backgroundColor: '#3366FF',
    height:20,
  },
  controlContainer1: {
    margin: 4,
    paddingHorizontal: 20,
    padding: 35,
    // backgroundColor: '#FF3D71',
    // backgroundColor: '#00E096',
    backgroundColor: '#FFAA00',
    height:95,
    marginVertical:-10,
    marginHorizontal:-10,
  },
  cardBody:{
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
});
