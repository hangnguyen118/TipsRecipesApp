import { View, Text, ImageProps, Image, StyleSheet } from 'react-native';
import { COLOR, BORDERRADIUS, FONTSIZE } from '../../theme/theme';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

export type Props = {
    title: string;
    imageLink?: ImageProps;
    nutritionnalInfomation?: string;
};

const SquareMediumCard: React.FC<Props> = ({ title, imageLink, nutritionnalInfomation }) => {
    return (
        <View style={styles.cardBackground}>
            <Image source={imageLink} resizeMode='cover' style={styles.image} />
            <View style={styles.contentWrapper}>
                <View style={styles.wrapperLeft}>
                    <Text style={styles.title} ellipsizeMode='tail' numberOfLines={1}>{title}</Text>
                    <Text ellipsizeMode='tail' numberOfLines={2 }>{nutritionnalInfomation}</Text>
                </View>
                
                <FontAwesomeIcon icon={faHeart} size={30} color={COLOR.surfaceDim} />
            </View>
        </View>
    )
}

export default SquareMediumCard;

const styles = StyleSheet.create({
    cardBackground: {
        width: 240,
        height: 280,
        backgroundColor: COLOR.white,
        marginRight: 20,
        alignItems: 'center',
        borderWidth: 0.2,
        borderColor: COLOR.onSurface,
        borderRadius: BORDERRADIUS.radius_4,
    },
    image: {
        width: '100%',
        height: '60%',
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
    },
    title: {
        color: COLOR.black,
        fontSize: FONTSIZE.size_16,
        fontWeight: '500',
        marginBottom: 6
    },
    contentWrapper: {
        flex: 1,
        width: '100%',        
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
    },
    wrapperLeft: {
        flex: 1
    },
    wrapperRight: {
    }
})