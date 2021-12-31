import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CreateScreen from '../../screen/CreateScreen';

const Stack = createStackNavigator();

const CreateStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Create" component={CreateScreen}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default CreateStackNavigator;
