import { View, Text, Image, ImageProps, StyleSheet } from 'react-native'
import React from 'react'
import { BORDERRADIUS } from '../../theme/theme'

export type Props = {
    title: string,
    content?: string,
    imageLink?: ImageProps,
    creationDay?: string,
    author?: string
}

const ImageCard: React.FC<Props> = ({ imageLink, title }) => {
    return (
        <View style={styles.cardBackground}>
            <Text ellipsizeMode='tail' numberOfLines={1}>{title}</Text>
            <Image source={imageLink} resizeMode='cover' style={styles.image}/>
        </View>

    )
}

export default ImageCard;

const styles = StyleSheet.create({
    cardBackground: {
        width: 320,
        height: 220,
        marginRight: 10
    },
    image: {
        flex: 1,
        width: '100%',
        backgroundColor: 'red',
        borderRadius: BORDERRADIUS.radius_8,
    }
})