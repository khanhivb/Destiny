// navigation/AppNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import IndexScreen from '../screens/IndexScreen';
import LogoutScreen from '../screens/LogoutScreen';
import ProductScreen from '../screens/ProductScreen';
import ForgotPassword from '../screens/ForgotPassword';
const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen}  options={{ headerShown: false }}/>
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Home" component={IndexScreen} />
        <Stack.Screen name="Product" component={ProductScreen} />
        <Stack.Screen name="Logout" component={LogoutScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
