import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AuthScreen from './screens/AuthScreen';
import DashboardScreen from './screens/DashboardScreen';
import TodoScreen from './screens/TodoScreen';

const MainStack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function TabContainerLayout() {
  return (
    <BottomTabs.Navigator screenOptions={{ headerStyle: { backgroundColor: '#0066cc' }, headerTintColor: '#fff' }}>
      <BottomTabs.Screen name="Dashboard" component={DashboardScreen} options={{ title: 'Interface Overview' }} />
      <BottomTabs.Screen name="Todos" component={TodoScreen} options={{ title: 'List Management' }} />
    </BottomTabs.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="Auth">
        <MainStack.Screen name="Auth" component={AuthScreen} options={{ headerShown: false }} />
        <MainStack.Screen name="HomeTabs" component={TabContainerLayout} options={{ headerShown: false }} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
