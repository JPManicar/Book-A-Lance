import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text } from 'react-native';

import userHomeScreen from './src/screens/userHomeScreen';
import callAmbulance from './src/screens/callAmbulance';
import confirmCall from './src/screens/confirmCall';
import trackAmbulance from './src/screens/trackAmbulance';
import emergencyContacts from './src/screens/emergencyContacts';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>

        <Stack.Screen name="HomeScreen" component={userHomeScreen} />
        <Stack.Screen name="CallAmbulanceScreen" component={callAmbulance} />
        <Stack.Screen name="ConfirmCallScreen" component={confirmCall} />
        <Stack.Screen name="trackAmbulanceScreen" component={trackAmbulance} />
        <Stack.Screen name="emergencyContactsScreen" component={emergencyContacts} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

