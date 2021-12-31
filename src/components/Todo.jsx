import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';
import { AntDesign } from 'react-native-vector-icons';
import { useDispatch } from 'react-redux';
import { removeTodo, updateTodo } from '../store/actions/todo';

const Todo = ({ onetodo }) => {
  const dispatch = useDispatch();

  let status = 'Незавершен';

  const deleteHandler = () => {
    Alert.alert(
      'Удаление поста',
      'Вы уверены?',
      [
        {
          text: 'Отменить',
          style: 'cancel',
        },
        {
          text: 'Удалить',
          style: 'destructive',
          onPress() {
            dispatch(removeTodo(onetodo.id));
          },
        },
      ],
      { cancelable: false }
    );
  };
  if (onetodo.completed) {
    status = 'Завершен';
  } else {
    status = 'Незавершен';
  }
  const updateHanlder = () => {
    dispatch(updateTodo(onetodo.id));
  };

  return (
    <View style={styles.todo}>
      <View style={styles.textTitle}>
        <TouchableOpacity activeOpacity={0.7}>
          <Text style={styles.title} onPress={updateHanlder}>
            {onetodo.text}
          </Text>
        </TouchableOpacity>
        <AntDesign name="delete" size={24} onPress={deleteHandler} />
      </View>
      <View>
        <Text style={styles.status}>
          Статус:{' '}
          <Text style={{ color: onetodo.completed ? 'green' : 'red' }}>
            {status}
          </Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  todo: {
    marginBottom: 15,
    padding: 20,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowRadius: 2,
    shadowOpacity: 0.3,
    shadowOffset: { width: 2, height: 2 },
    backgroundColor: '#33ffcc',
    elevation: 8,
    borderRadius: 10,
    height: 200,
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
  },
  textTitle: {
    paddingVertical: 5,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    width: '100%',
  },
  title: {
    color: '#fff',
    fontSize: 28,
  },
  status: {
    fontSize: 20,
  },
});

export default Todo;
