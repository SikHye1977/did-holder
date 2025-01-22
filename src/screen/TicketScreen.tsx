import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface TicketScreenProps {

}

function TicketScreen({}: TicketScreenProps) {
  return (
    <SafeAreaView>
      <View>
        <Text>This is Ticket Screen</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({});

export default TicketScreen;