import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TabNavigator from './TabNavigator';
import WeatherScreen from '../screens/WeatherScreen';
import CityFormScreen from '../screens/CityFormScreen';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeTabs" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="HomeTabs" component={TabNavigator} />
        <Stack.Screen name="Weather" component={WeatherScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
