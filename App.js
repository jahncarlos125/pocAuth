import { StatusBar } from 'expo-status-bar';
import React, {useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import * as LocalAuthentication from 'expo-local-authentication';

export default function App() {
  useEffect(() => {
    const verify = async () => {
      const hasTouch = await LocalAuthentication.hasHardwareAsync();
      console.log(hasTouch);
    }
  
    verify();
  }, [])
  

  const auth = async () => {
    try {
      const result = await LocalAuthentication.authenticateAsync({
        promptMessage: 'Use sua impressão digital para autenticação'
      })
      if(result.success){
        Alert.alert('Usuário autenticado!')
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <View style={styles.container}>
    <TouchableOpacity
      onPress={() => auth()}
    >
      <Text>Logar</Text>
    </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
