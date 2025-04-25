import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import WeatherScreen from './src/screens/WeatherScreen';
import TipsScreen from './src/screens/TipsScreen';
import AboutScreen from './src/screens/AboutScreen';
import NewsScreen from './src/screens/NewsScreen';
import AjudaScreen from './src/screens/AjudaScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MainTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Clima" component={WeatherScreen} />
      <Tab.Screen name="News" component={NewsScreen} />
      <Tab.Screen name="Dicas" component={TipsScreen} />
      <Tab.Screen name="Sobre" component={AboutScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Main" component={MainTabs} />
        <Stack.Screen name="Ajuda" component={AjudaScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
