import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from '../../screen/MainScreen';

const Stack = createStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Main" component={MainScreen}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
