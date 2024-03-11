import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { SquareButton } from '../components';
import { RootStackScreenProps } from '../navigation/types';

const Onboarding = ({ navigation, route }: RootStackScreenProps<'OnBoarding'>) => {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('../assets/app_images/bg-2.jpg')} resizeMode="cover" style={styles.image}/>
      <View style={styles.wrapper}>
        <Text style={styles.heading}>Welcome to <Text style={styles.appName}>TipsRecipes</Text></Text>           
        <Text style={styles.text}>Your Personal Recipe Assistant - Find recipes with a simple scan</Text> 
        <SquareButton text='Login' onPress={()=> navigation.navigate('Login')}/>  
        <SquareButton text='Register' color='#DED8E0' textColor='black' onPress={()=> navigation.navigate('Register')}/>  
        <Text style={styles.text}>Forgot password?</Text>
      </View>
    </SafeAreaView>
  )
}

export default Onboarding;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF4E6"
  },
  logo: {    

  },
  image: {
    width: '100%',
    height: 480
  },
  wrapper: {
    flex: 1,    
    borderTopLeftRadius: 26,
    borderTopRightRadius: 26,
    shadowColor: '#FE0000',
    shadowOffset: {
      width: 0, 
      height: 6
    },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 10,
    backgroundColor: "#fff",
    padding: 20
  },
  heading: {
    color: 'black',
    fontSize: 26,
    fontWeight: '500',
    textAlign: 'center',
    marginTop: 10
  },
  text: {
    color: '#49454E',
    fontSize: 14,
    textAlign: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    margin: 10,
  },
  appName: {
    color: '#FE0000',
    padding: 20
  }
});