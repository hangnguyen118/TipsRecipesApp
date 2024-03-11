import { Image, Text, SafeAreaView, StyleSheet, View, TextInput, Pressable } from 'react-native';
import React from 'react';
import { SquareButton } from '../components';
import { RootStackScreenProps } from '../navigation/types';
import { useAuth } from '../../AuthContext';

const Login = ({ navigation, route }: RootStackScreenProps<'Login'>) => {
  const { dispatch } = useAuth();
  const handleButtonPressLogin = () => {
    const data = {email: 'hangnguyen@gmail.com', password: '123'};
    dispatch({ type: 'LOGIN', payload: data });
  }
  return (
    <SafeAreaView>
      <Image source={require('../assets/app_images/bg-1.jpg')} resizeMode="cover" style={styles.image} />
      <View style={styles.wrapper}>
        <Text style={styles.heading}>Login to your account</Text>
        <TextInput placeholder='Email' style={styles.input} />
        <TextInput placeholder='Password' style={styles.input} />
        <View style={{display: 'flex', alignItems: 'flex-end'}}>
          <Pressable style={styles.link}>
            {({ pressed }) => (
              <Text style={{
                color: pressed ? '#7A757F' : '#0057FF',
                fontSize: 14,
                padding: 10,
                width: 140,
              }}>Forgot password?</Text>
            )}
          </Pressable>
        </View>


        <SquareButton text='Login' onPress={handleButtonPressLogin} />

        <View style={{display: 'flex', flexDirection: 'row', padding: 10, justifyContent: 'center', margin:10}}>
          <Text>Don't have account?</Text>
          <Pressable style={styles.link} onPress={()=> navigation.navigate('Register')}>
            {({ pressed }) => (
              <Text style={{
                color: pressed ? '#7A757F' : '#0057FF',
                fontSize: 14,               
              }}>Signup</Text>
            )}
          </Pressable>
        </View>
      </View>

    </SafeAreaView>
  )
}

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF4E6"
  },
  image: {
    width: '100%',
    height: 300
  },
  wrapper: {
    padding: 20
  },
  heading: {
    color: 'black',
    fontSize: 26,
    fontWeight: '500',
  },
  input: {
    color: '#7A757F',
    borderColor: '#7A757F',
    borderBottomWidth: 0.5,
    marginBottom: 20,
    marginTop: 10
  },
  link: {   
    marginBottom: 20, 
    marginLeft: 10
  }
})