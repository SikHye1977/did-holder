import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { signJsonLD } from '../utils/DidAuth';
import { getItem } from '../utils/AsyncStorage';

const sign_doc = async() => {
  const did = await getItem('DID');
  const verkey = await getItem('Verkey');
  const result = await signJsonLD(did, verkey);
  console.log(result);
}

function DidAuthScreen() {
  return (
    <SafeAreaView>
      <View>
        <Text>This is DID AUTH Screen</Text>
      </View>
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={sign_doc}
        >
          <Text style={styles.buttonText}>DID Auth로 로그인</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#3b82f6',
    width: '90%',
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    marginBottom : 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default DidAuthScreen;