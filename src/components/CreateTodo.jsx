import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { addTodo } from '../store/actions/todo';

const maxSymbol = 20;

const CreateTodo = ({ addHandler }) => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const addTodoHandler = () => {
    if (text.trim().length > maxSymbol) {
      Alert.alert(`Символов должно быть меньше ${maxSymbol}`);
    } else {
      const todo = {
        id: new Date(Date.now()).toLocaleString(),
        text,
        completed: false,
      };
      dispatch(addTodo(todo));
      addHandler();
      setText('');
    }
  };

  return (
    <View style={styles.wrapper}>
      <TextInput
        placeholder="Введите дело"
        value={text}
        onChangeText={setText}
      />
      <View style={styles.buttons}>
        <Button
          title="Добавить"
          onPress={addTodoHandler}
          disabled={text.length === 0}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 15,
    width: 200,
  },
  buttons: {
    maxWidth: '100%',
    marginTop: 30,
  },
});

export default CreateTodo;
