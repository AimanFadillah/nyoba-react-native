import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const nama = "Aiman"
  const [angka,setAngka] = useState(0);
  return (
    <View style={{
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <Text style={{
        fontSize:20
      }} >Halo {nama},sekarang berhitung {angka}</Text>
      <Button  onPress={() => setAngka(angka + 1)} title='Pencet' />
    </View>
  );
}


