import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeStackNavigator from './stack-navigators/HomeStackNavigator';
import CreateStackNavigator from './stack-navigators/CreateStackNavigator';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerActiveTintColor: '#ccffff',
      }}
    >
      <Drawer.Screen
        name="MainStack"
        component={HomeStackNavigator}
        options={{
          title: 'Дела',
        }}
      />
      <Drawer.Screen
        name="CreateStack"
        component={CreateStackNavigator}
        options={{
          title: 'Создание дела',
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
