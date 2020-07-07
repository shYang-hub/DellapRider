import React from 'react';
import { StyleSheet } from 'react-native';
import { Select, SelectElement, SelectProps, SelectOptionType, IndexPath,SelectItem } from '@ui-kitten/components';
import Reactotron from 'reactotron-react-native'

export const SelectShowcase = (props: SelectProps): SelectElement => {

  const defaultOptions: SelectOptionType[] = [
    { text: 'Option 1' },
    { text: 'Option 2' },
    { text: 'Option 3' },
    { text: 'Option 4' },
    { text: 'Option 5' },
    { text: 'Option 6' },
    { text: 'Option 7' },
    { text: 'Option 8' },
  ];

  const defaultOptions1 = [
    'Option 9',
    'Option 2',
    'Option 3',
    'Option 4',
    'Option 5',
    'Option 6',
    'Option 7',
    'Option 8',
  ];


  const renderOption = (title) => (
      <SelectItem title={title}/>
    );
  // const [selectedOption, setSelectedOption] = React.useState(props.selectedOption);
  const [selectedOption, setSelectedOption] = React.useState(defaultOptions);

  const [selectedIndex, setSelectedIndex] = React.useState(new IndexPath(0));
  const displayValue = defaultOptions1[selectedIndex.row];

  const onSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <Select
      selectedIndex={selectedIndex}
      placeholder='Default'
      style={styles.select}
      value={displayValue}
      onSelect={index => setSelectedIndex(index)}
    >
        {defaultOptions1.map(renderOption)}
    </Select>
  );
};

const styles = StyleSheet.create({
  select: {
    width: 200,
  },
});
