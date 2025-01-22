// import React, { useState, useEffect } from 'react';
// import { SafeAreaView, StyleSheet, Text, Button, View } from 'react-native';
// import { createDid } from './src/utils/AgentSetup';

// const App = (): JSX.Element => {
//   const [did, setDid] = useState<string | null>(null);

//   const create_did = async () => {
//     try {
//       const result_did = await createDid();
//       console.log('DID 생성 결과:', result_did.result?.did);
//       setDid(result_did.result?.did || null); // 상태에 저장
//     } catch (error) {
//       console.error('DID 생성 오류:', error);
//     }
//   };

//   const check_did = () => {
//     if (did) {
//       console.log('현재 DID:', did);
//     } else {
//       console.log('아직 DID가 생성되지 않았습니다.');
//     }
//   };

//   useEffect(() => {
//     if (did) {
//       console.log('DID 상태 변경 감지:', did);
//     }
//   }, [did]);

//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.content}>
//         <Button title="createDID" onPress={create_did} />
//         {did && <Text style={styles.didText}>Created DID: {did}</Text>}
//         <Button title="check created DID" onPress={check_did} />
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   content: {
//     padding: 16,
//     alignItems: 'center',
//   },
//   didText: {
//     marginTop: 16,
//     fontSize: 16,
//     color: 'blue',
//     textAlign: 'center',
//   },
// });

// export default App;

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/Navigation/StackNavigator';
import {StyleSheet, View} from 'react-native';

interface AppProps {

}

function App({}: AppProps) {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

export default App;