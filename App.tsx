import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './android/app/src/screens/LoginScreen'; // Adjust path as necessary
import SignupScreen from './android/app/src/screens/SignupScreen'; // Adjust path as necessary
import DashboardScreen from './android/app/src/screens/DashboardScreen'; // Adjust path as necessary
import IpoListScreen from './android/app/src/screens/IpoListScreen'; // Adjust path as necessary
import TransactionHistoryScreen from './android/app/src/screens/TransactionHistoryScreen'; // Adjust path as necessary
import ProfileScreen from './android/app/src/screens/ProfileScreen'; // Adjust path as necessary

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        {/* <Stack.Screen name="IpoList" component={IpoListScreen} /> */}
        <Stack.Screen name="TransactionHistory" component={TransactionHistoryScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
