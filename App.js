import React from "react";
import { StyleSheet, View, Text, Switch, Button } from 'react-native';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EmergenciaScreen from './screens/EmergenciaScreen';
import HomeScreen from './screens/HomeScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
          headerShown: false,
      }}>
        <Stack.Screen name="Incio" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App