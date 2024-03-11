import { View, Text, Image, ImageProps, StyleSheet } from 'react-native'
import React from 'react'
import { BORDERRADIUS, COLOR } from '../../theme/theme';

export type Props = {
    name: string;
    imageLink?: ImageProps;
  };

const SquareCard: React.FC<Props> = ({name, imageLink}) => {
  return (
    <View style={styles.cardBackground}>
        <Image source={imageLink} resizeMode='contain' style={styles.image}/>
        <Text style={styles.text}>{name}</Text>
    </View>
  )
}

export default SquareCard;

const styles = StyleSheet.create({
    cardBackground: {
        width: 90,
        height: 100,
        backgroundColor: COLOR.surfaceDim,
        margin: 10,
        alignItems: 'center',
        borderRadius: BORDERRADIUS.radius_4,
        padding: 10
    },
    image: {
        flex: 1,
        width: '80%',        
    },
    text: {
        color: COLOR.onSurface
    }
})