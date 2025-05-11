import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from './src/screens/HomeScreen';
import WeatherScreen from './src/screens/WeatherScreen';
import TipsScreen from './src/screens/TipsScreen';
import AboutScreen from './src/screens/AboutScreen';
import NewsScreen from './src/screens/NewsScreen';
import AjudaScreen from './src/screens/AjudaScreens';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#166534',
        tabBarInactiveTintColor: '#94a3b8',
        tabBarStyle: {
          backgroundColor: '#f0fdf4',
          borderTopWidth: 1,
          borderTopColor: '#ccc',
        },
        tabBarIcon: ({ color, size }) => {
          let iconName;

          switch (route.name) {
            case 'Home':
              iconName = 'home';
              break;
            case 'Clima':
              iconName = 'cloudy';
              break;
            case 'News':
              iconName = 'newspaper';
              break;
            case 'Dicas':
              iconName = 'leaf';
              break;
            case 'Sobre':
              iconName = 'information-circle';
              break;
            default:
              iconName = 'ellipse';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ tabBarLabel: 'Home' }}
      />
      <Tab.Screen
        name="Clima"
        component={WeatherScreen}
        options={{ tabBarLabel: 'Clima' }}
      />
      <Tab.Screen
        name="News"
        component={NewsScreen}
        options={{ tabBarLabel: 'News' }}
      />
      <Tab.Screen
        name="Dicas"
        component={TipsScreen}
        options={{ tabBarLabel: 'Dicas' }}
      />
      <Tab.Screen
        name="Sobre"
        component={AboutScreen}
        options={{ tabBarLabel: 'Sobre' }}
      />
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
