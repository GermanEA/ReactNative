import React from 'react';
import { SafeAreaView } from 'react-native';
// import { HolaMundoScreen } from './src/screens/HolaMundoScreen';
import { ContadorScreen } from './src/screens/ContadorScreen';

export const App = () => {

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* // <HolaMundoScreen /> */}
      <ContadorScreen />
      
    </SafeAreaView>
  )
}