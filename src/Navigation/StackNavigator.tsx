import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screen/HomeScreen';
import TicketScreen from '../screen/TicketScreen';
import ProfileScreen from '../screen/ProfileScreen';
import DidAuthScreen from '../screen/DidAuthScreen';

export type StackParamList = {
  Home : undefined;
  Ticket : undefined;
  Profile : undefined;
  DidAuth : undefined;
};

const Stack = createStackNavigator<StackParamList>();

function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Ticket" component={TicketScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="DidAuth" component={DidAuthScreen} />
    </Stack.Navigator>
  );
}

export default StackNavigator;