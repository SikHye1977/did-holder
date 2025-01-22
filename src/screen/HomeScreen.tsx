import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { StackParamList } from '../Navigation/StackNavigator';

function HomeScreen() {
  const navigation = useNavigation<NavigationProp<StackParamList>>();

  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button title = "Go to Ticket Screen" onPress = {() => navigation.navigate('Ticket')} />
      <Button title = "Go to DID Profile Screen" onPress = {() => navigation.navigate('Profile')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container : {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});

export default HomeScreen;