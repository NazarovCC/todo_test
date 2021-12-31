import React from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';
import Todo from './Todo';

const TodosList = ({ allTodo }) => {
  if (!allTodo.length) {
    return (
      <View style={styles.wrapper}>
        <Text>Заданий нет</Text>
      </View>
    );
  }

  return (
    <View style={styles.wrapper}>
      <FlatList
        data={allTodo}
        renderItem={({ item }) => <Todo onetodo={item} />}
        keyExtractor={(todo) => todo.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
  },
  noTodo: {
    textAlign: 'center',
    marginVertical: 10,
    fontSize: 18,
  },
});

export default TodosList;
