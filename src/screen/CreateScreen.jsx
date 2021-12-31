import React from 'react';
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import CreateTodo from '../components/CreateTodo';

const CreateScreen = ({ navigation }) => {
  const add = () => {
    navigation.navigate('Main');
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.center}>
        <CreateTodo addHandler={add} />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    marginTop: 15,
    alignItems: 'center',
    backgroundColor: '#ccffff',
  },
});

export default CreateScreen;
