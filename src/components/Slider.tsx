import { View, Text, FlatList, TouchableOpacity, Alert, StyleSheet } from 'react-native'
import React from 'react'
import { Blog } from '../data/data';
import { ImageCard } from '.';

export type Props = {
    data: Blog[],
};
const Slider: React.FC<Props> = ({data}) => {
  return (
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.container}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => Alert.alert('ok')}>
                <ImageCard title={item.title} imageLink={item.imageLink} author={item.author}/>
            </TouchableOpacity>
          )
        }}
      />
  )
}

export default Slider;

const styles = StyleSheet.create({
    container: {
        marginBottom: 40
    }
})