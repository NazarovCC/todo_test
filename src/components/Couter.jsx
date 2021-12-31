import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Counter = ({ comp, len }) => {
  return (
    <View style={styles.counter}>
      <Text style={styles.text}>
        Кол-во завершенных: <Text style={styles.count}>{comp}</Text>
      </Text>
      <Text style={styles.text}>
        Кол-во незавершенных: <Text style={styles.count}>{len}</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  counter: {
    flex: 1,
    marginVertical: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
  },
  count: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default Counter;
