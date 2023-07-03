import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Route } from 'navigation';
import React, { memo } from 'react';

import Screen from './screens';
const Stack = createNativeStackNavigator();

const Settings = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        //orientation: Platform.isTV ? 'landscape' : 'portrait',
        headerTintColor: '#fff',
        headerTitleStyle: {
          color: '#FFF',
        },
        headerStyle: {
          backgroundColor: '#1c2029',
        },
        headerShadowVisible: false,
      }}>
      <Stack.Screen
        name={Route.Settings}
        component={Screen.SettingsMenu}
        options={{
          title: 'Settings',
          headerShown: false,
          animation: 'fade',
        }}
      />
      <Stack.Screen
        name={Route.DeviceInfo}
        component={Screen.DeviceInfo}
        options={{
          title: 'Device Info',
          headerShown: false,
          animation: 'fade',
        }}
      />
    </Stack.Navigator>
  );
};

export default memo(Settings);
