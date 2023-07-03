import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import Screen from 'screens';

const Tab = createMaterialTopTabNavigator();

const Navigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          color: '#FFF',
        },
        tabBarStyle: {
          backgroundColor: '#1c2029',
        },
      }}>
      <Tab.Screen name="Home" component={Screen.Movies} />
      <Tab.Screen name="Settings" component={Screen.Settings} />
    </Tab.Navigator>
  );
};

export default Navigation;
