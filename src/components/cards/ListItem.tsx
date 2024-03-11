import { View, Text, StyleSheet, Image, ImageProps } from 'react-native'
import React from 'react'
import { BORDERRADIUS } from '../../theme/theme'
import { RoundButton } from '..'
export type Props = {
    title: string,
    content?: string,
    imageLink?: ImageProps,
    creationDay?: string,
    author?: string
}

const ListItem: React.FC<Props> = ({ title, imageLink, content, author, creationDay }) => {
    return (
        <View style={styles.wrapperCard}>
            <View style={styles.wrapperLeft}>
                <Image resizeMode='cover' source={imageLink} style={styles.image}/>
            </View>

            <View style={styles.wrapperRight}>
                <Text>{creationDay}</Text>
                <Text ellipsizeMode='tail' numberOfLines={2}>{title}</Text>
                <RoundButton/>
            </View>
        </View>
    )
}

export default ListItem;

const styles = StyleSheet.create({
    wrapperCard: {
        flexDirection: 'row',
        width: 320,
        height: 100,
        borderRadius: BORDERRADIUS.radius_8,
        margin: 10,
        overflow: 'hidden'
    },
    wrapperLeft: {
        width: 100,
        height: '100%',
        backgroundColor: 'red',
        borderRadius: BORDERRADIUS.radius_8,
    },
    wrapperRight: {
        flex: 1,
        padding: 10,
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: BORDERRADIUS.radius_8,
    }
})