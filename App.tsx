// File: App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './android/app/src/screens/LoginScreen';
import SignupScreen from './android/app/src/screens/SignupScreen';
import DashboardScreen from './android/app/src/screens/DashboardScreen';
import IpoListScreen from './android/app/src/screens/IpoListScreen';
// import IpoDetailScreen from './android/app/src/screens/IpoDetailScreen';
import TransactionHistoryScreen from './android/app/src/screens/TransactionHistoryScreen';
import ProfileScreen from './android/app/src/screens/ProfileScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen name="IpoList" component={IpoListScreen} />
        {/* <Stack.Screen name="IpoDetail" component={IpoDetailScreen} /> */}
        <Stack.Screen name="TransactionHistory" component={TransactionHistoryScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
