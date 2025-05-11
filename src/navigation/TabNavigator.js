import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from '../screens/HomeScreen';
import WeatherScreen from '../screens/WeatherScreen';
import TipsScreen from '../screens/TipsScreen';
import NewsScreen from '../screens/NewsScreen';
import AboutScreen from '../screens/AboutScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
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
        options={{ tabBarLabel: '🏠 Home' }}
      />
      <Tab.Screen
        name="Clima"
        component={WeatherScreen}
        options={{ tabBarLabel: '☁️ Clima' }}
      />
      <Tab.Screen
        name="News"
        component={NewsScreen}
        options={{ tabBarLabel: '📰 News' }}
      />
      <Tab.Screen
        name="Dicas"
        component={TipsScreen}
        options={{ tabBarLabel: '🌱 Dicas' }}
      />
      <Tab.Screen
        name="Sobre"
        component={AboutScreen}
        options={{ tabBarLabel: 'ℹ️ Sobre' }}
      />
    </Tab.Navigator>
  );
}
