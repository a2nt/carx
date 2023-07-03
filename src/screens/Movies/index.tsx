import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { Route } from '../../navigation/routes';
import Screen from './screens';

const Stack = createNativeStackNavigator();
const Movies = () => {
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
        name={Route.Discover}
        component={Screen.Discover}
        options={{
          title: 'Discover',
          headerShown: false, //!Platform.isTV,
          animation: 'fade',
        }}
      />
      <Stack.Screen
        name={Route.Movie}
        component={Screen.Movie}
        options={({ route }) => ({
          title: (route.params as any)?.title || 'Movie',
          headerShown: false, //!Platform.isTV,
        })}
      />
      <Stack.Screen
        name={Route.Show}
        component={Screen.Show}
        options={({ route }) => ({
          title: (route.params as any)?.title || 'Show',
          headerShown: false, //!Platform.isTV,
        })}
      />
      <Stack.Screen
        name={Route.TrendingToday}
        component={Screen.TrendingToday}
        options={({ route }) => ({
          title: (route.params as any)?.title,
          headerShown: false, //!Platform.isTV,
        })}
      />
      <Stack.Screen
        name={Route.Player}
        component={Screen.Player}
        options={{
          headerShown: false,
          orientation: 'landscape',
          presentation: 'fullScreenModal',
          autoHideHomeIndicator: true,
          animation: 'fade',
        }}
      />
    </Stack.Navigator>
  );
};

export default Movies;
