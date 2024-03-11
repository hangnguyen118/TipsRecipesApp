import React from 'react';
import { StyleSheet } from 'react-native';
import { AuthProvider } from './AuthContext';
import RootStackNavigator from './src/navigation/RootStackNavigator';

function App(): React.JSX.Element {
  return (
  <AuthProvider>  
    <RootStackNavigator/>
  </AuthProvider> 
  );
}
const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: '#fff',
  },
});

export default App;

