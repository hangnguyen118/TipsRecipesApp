import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faTrashCan } from '@fortawesome/free-regular-svg-icons'
import { COLOR, FONTSIZE } from '../../theme/theme'

export type Props = {
    creationDay: string,
    content: string
}
const SearchItem: React.FC<Props> = ({ content, creationDay }) => {
    return (
        <View style={styles.wrapper}>
            <View>
                <Text style={styles.time}>{creationDay}</Text>
                <Text style={styles.text}>{content}</Text>
            </View>
            <TouchableOpacity style={styles.buttonDelete}>
                <FontAwesomeIcon icon={faTrashCan} size={14} />
            </TouchableOpacity>

        </View>
    )
}

export default SearchItem;

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 5
    },
    time: {
        fontSize: FONTSIZE.size_12
    },
    text: {
        fontSize: 16,
        color: COLOR.black
    },
    buttonDelete: {
        padding: 15,
    }
})