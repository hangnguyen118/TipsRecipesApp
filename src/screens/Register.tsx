import { Image, Text, SafeAreaView, StyleSheet, View, TextInput, Pressable } from 'react-native';
import React from 'react';
import { SquareButton } from '../components';
import { RootStackScreenProps } from '../navigation/types';

const Register = ({ navigation, route }: RootStackScreenProps<'Register'>) => {
  return (
    <SafeAreaView>
      <Image source={require('../assets/app_images/bg-1.jpg')} resizeMode="cover" style={styles.image} />
      <View style={styles.wrapper}>
        <Text style={styles.heading}>Register new account</Text>
        <TextInput placeholder='Full name' style={styles.input} />
        <TextInput placeholder='Email' style={styles.input} />
        <TextInput placeholder='Password' style={styles.input} />
        <TextInput placeholder='Replace password' style={styles.input} />
        <SquareButton text='Register' />

        <View style={{display: 'flex', flexDirection: 'row', padding: 10, justifyContent: 'center', margin:10}}>
        <Text>Do you have account?</Text>
          <Pressable style={styles.link} onPress={()=> navigation.navigate('Login')}>
            {({ pressed }) => (
              <Text style={{
                color: pressed ? '#7A757F' : '#0057FF',
                fontSize: 14,               
              }}>Login</Text>
            )}
          </Pressable>
        </View>
      </View>

    </SafeAreaView>
  )
}

export default Register;

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