import React from 'react';
import { StyleSheet } from 'react-native';
import { Divider, Layout, LayoutProps, Text, Select, SelectItem, IndexPath } from '@ui-kitten/components';

export interface MenuSelectProps extends LayoutProps {
  hint?: string;
  value: string;
}

export const MenuSelect = (props: MenuSelectProps): React.ReactElement => {

  const { style, hint, value, ...layoutProps } = props;

  const [selectedIndex, setSelectedIndex] = React.useState(new IndexPath(0));

  const bnkCode = [ 'IBK', '경남', '부산' ];

  const renderHintElement = (): React.ReactElement => (
    <Text
      appearance='hint'
      category='s1'>
      {hint}
    </Text>
  );

  const selectBnkCode = (): SelectItem => (
    <SelectItem title='Option'/>
  );

  return (
    <React.Fragment>
      <Layout
        level='1'
        {...layoutProps}
        style={[styles.container, style]}>
        {hint && renderHintElement()}
        <Select
        style={ styles.select }
        selectedIndex={selectedIndex}
        onSelect={index => setSelectedIndex(index)}
        size='small'>
        {selectBnkCode()}
      </Select>
      </Layout>
      <Divider/>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  select:{
    minWidth: 200
  }
});
