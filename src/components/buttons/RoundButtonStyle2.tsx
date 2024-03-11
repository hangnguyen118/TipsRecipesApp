import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { BORDERRADIUS, COLOR } from '../../theme/theme'

export type Props = {
    text: string
}
const RoundButtonStyle2: React.FC<Props> = ({text}) => {
  return (
    <View style={styles.wrapper}>
        <Text style={styles.text}>#{text}</Text>
    </View>
      
  )
}

export default RoundButtonStyle2;

const styles = StyleSheet.create({
    wrapper: {       
        margin: 10,
        padding: 8,
        backgroundColor: COLOR.surfaceDim,
        borderRadius: BORDERRADIUS.radius_10,

    },
    text: {
        fontSize: 16,        
    }
})