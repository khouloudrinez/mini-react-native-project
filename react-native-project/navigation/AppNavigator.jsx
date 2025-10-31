import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SavedAddressScreen from '../screens/SavedAddressScreen';
import AddAddressScreen from '../screens/AddAddressScreen';
import CategoryScreen from '../screens/CategoryScreen';
import ImageSearchScreen from '../screens/ImageSearchScreen';
import HomeScreen from '../screens/HomeScreen';

const Stack = createNativeStackNavigator();


export default function AppNavigator() {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
         <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SavedAddresses"component={SavedAddressScreen}/>
        <Stack.Screen name="AddAddress" component={AddAddressScreen} />
        <Stack.Screen name="Category" component={CategoryScreen} />
        <Stack.Screen name="ImageSearch" component={ImageSearchScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
