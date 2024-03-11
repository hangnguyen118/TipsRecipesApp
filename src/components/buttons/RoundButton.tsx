import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import { BORDERRADIUS, COLOR } from '../../theme/theme';

const RoundButton = () => {
  return (
    <Pressable style={styles.button}>
        <Text style={styles.text}>Xem thêm</Text>    
    </Pressable>
  )
}

export default RoundButton;

const styles = StyleSheet.create({
    button: {
        width: 80,
        padding: 5,
        alignItems: 'center',
        backgroundColor: COLOR.tertiary,
        borderRadius: BORDERRADIUS.radius_4
    },
    text: {
        color: COLOR.onTertiary,
        fontWeight: '500'
    }
})
