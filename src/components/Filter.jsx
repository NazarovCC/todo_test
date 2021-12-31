import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { Picker } from '@react-native-picker/picker';
import { selected } from '../store/actions/todo';

const Filter = () => {
  const [selectedValue, setSelectedValue] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(selected(selectedValue));
  }, [selectedValue]);

  return (
    <View style={styles.filter}>
      <Picker
        selectedValue={selectedValue}
        onValueChange={(itemValue, itemIndex) => {
          setSelectedValue(itemValue);
        }}
        style={styles.picker}
      >
        <Picker.Item label="Все" value={null} />
        <Picker.Item label="Завершенные" value={true} />
        <Picker.Item label="Незавершенные" value={false} />
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  filter: {
    flex: 1,
    marginVertical: 10,
    alignItems: 'center',
    backgroundColor: '#33ffcc',
  },
  picker: {
    padding: 10,
    borderWidth: 2,
    borderColor: '#666',
    width: 200,
  },
});

export default Filter;
