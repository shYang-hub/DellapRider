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
} from '@ui-kitten/components';
import { OrderScreenProps } from '../../navigation/order.navigator';
import { AppRoute } from '../../navigation/app-routes';
import { ProgressBar } from '../../components/progress-bar.component';
import { SearchIcon } from '../../assets/icons';
import { Todo } from '../../data/todo.model';
import { Toolbar } from '../../components/toolbar.component';
import { MenuIcon } from '../../assets/icons';

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
    <ListItem
      style={styles.item}
      onPress={() => navigateOrderDetails(index)}>
      <Text category='s1'>
        {item.title}
      </Text>
      <Text
        appearance='hint'
        category='c1'>
        {item.description}
      </Text>
      <ProgressBar
        style={styles.itemProgressBar}
        progress={item.progress}
        text={`${item.progress}%`}
      />
    </ListItem>
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
  item: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingHorizontal: 12,
  },
  itemProgressBar: {
    width: '50%',
    marginVertical: 12,
  },
  buttonArea:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
  },
  button:{
    width: 80,
    height: 1,
    fontSize: 20,
  }
});
