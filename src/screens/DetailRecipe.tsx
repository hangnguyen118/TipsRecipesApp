import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native'
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { COLOR, FONTSIZE } from '../theme/theme';
import { RootStackScreenProps } from '../navigation/types';

const product = {
    name: 'Rau xanh nhiệt đới',
    imageList: [
        {
            id: '1',
            img: require('../assets/app_images/food_images/toi_va_mui.jpg'),
        },
        {
            id: '2',
            img: require('../assets/app_images/food_images/toi_va_mui.jpg'),
        },
        {
            id: '3',
            img: require('../assets/app_images/food_images/toi_va_mui.jpg'),
        },
        {
            id: '4',
            img: require('../assets/app_images/food_images/toi_va_mui.jpg'),
        }
    ],
    nutritionnalInfomation: 'calories: 69, fat: 10, cholesterol: omg, protein: 4, sugar: 18',
    ingredient: '1 trái kiwi, ½ cốc dứa, 2 dưa leo, ½ chanh, 4 củ cải, 1 nắm rau mùi/ngò',
    kcal: 750
}
const DetailRecipe = ({ navigation, route }: RootStackScreenProps<'DetailRecipe'>) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerTop}>
                <TouchableOpacity style={styles.exitButton} onPress={() => navigation.navigate('MainTab')}>
                    <FontAwesomeIcon icon={faChevronLeft} size={24} />
                </TouchableOpacity>

                <Text style={styles.title}>Rau xanh nhiệt đới - {product.kcal}kcal</Text>
            </View>
            <TouchableOpacity style={styles.sliderItem}>
                <Image source={product.imageList[0].img} style={styles.image} />
            </TouchableOpacity>

            <View style={styles.contentWrapper}>
                <Text style={styles.text}>Công thức</Text>
                <Text>{product.ingredient}</Text>
                <Text style={styles.text}>Thành phần</Text>
                <Text>{product.nutritionnalInfomation}</Text>
            </View>

        </SafeAreaView>
    )
}

export default DetailRecipe;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    headerTop: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLOR.surfaceGrey,
    },
    contentWrapper: {
        padding: 20
    },
    exitButton: {
        padding: 10
    },
    sliderItem: {
        width: '100%',
        height: 320,
        backgroundColor: 'red',
    },
    image: {
        flex: 1,
        width: '100%',
    },
    title: {
        flex: 1,
        fontSize: FONTSIZE.size_20,
        fontWeight: '600',
        textAlign: 'center',
        color: COLOR.black
    },
    text: {
        fontSize: 20,
        fontWeight: '500'
    }
})