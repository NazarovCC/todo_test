import React, { useEffect, useState, useMemo } from 'react';
import { View, StyleSheet } from 'react-native';
import TodosList from '../components/TodosList';
import { useDispatch, useSelector } from 'react-redux';
import { loadTodo } from '../store/actions/todo';
import Filter from '../components/Filter';
import Counter from '../components/Couter';

const MainScreen = () => {
  const [comp, setComp] = useState(0);
  const [uncomp, setUnComp] = useState(0);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadTodo());
  }, []);
  const allTodo = useSelector((state) => state.todo.todos);
  const value = useSelector((state) => state.todo.value);

  let filterTodo = useMemo(() => {
    if (value !== null) {
      return [...allTodo].filter((todo) => todo.completed === value);
    }

    return allTodo;
  }, [value, allTodo]);

  useEffect(() => {
    const vip = allTodo.reduce((acc, item) => {
      if (item.completed) {
        acc += 1;
      }
      return acc;
    }, 0);

    setComp(vip);
    const len = allTodo.length;
    setUnComp(len - vip);
  }, [allTodo]);

  return (
    <View style={styles.center}>
      <View style={styles.wrapper}>
        <Filter />
        <Counter comp={comp} len={uncomp} />
      </View>
      <View style={styles.list}>
        <TodosList allTodo={filterTodo} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ccffff',
  },
  wrapper: {
    alignItems: 'center',
    justifyContent: 'space-around',
    height: 200,
    padding: 10,
  },
  list: {
    flex: 1,
  },
});

export default MainScreen;
