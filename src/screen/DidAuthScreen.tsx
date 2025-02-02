import React, { useState } from 'react';
import {StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { getItem } from '../utils/AsyncStorage';
import { encrypt_msg, decrypt_msg } from '../utils/DidAuth';

function DidAuthScreen() {
  const [ciphertext, setChiperText] = useState(null);

  const encrypt = async() => {
    const issuer_verkey = "3F8jjjiQy8z3iKxLD9jU1PFYAfWo48Cd9PHSS8N3z2Qv"
    const verkey = await getItem('Verkey');
    const result = await encrypt_msg('test', issuer_verkey, verkey);
    setChiperText(result.ciphertext)
    console.log(result);
  }

  const decrpyt = async() => {
    if(!ciphertext) {
      console.error('No Chiper Text exist!');
    }
    else{
      const result = decrypt_msg(ciphertext);
      console.log(result);
    }
  }

  return (
    <SafeAreaView>
      <View>
        <Text>This is DID AUTH Screen</Text>
      </View>
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={encrypt}
        >
          <Text style={styles.buttonText}>Challenge encrpyt</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={decrpyt}
        >
          <Text style={styles.buttonText}>Challenge decrypt</Text>
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