import { View, Text, ScrollView, StyleSheet, Pressable, FlatList, TouchableOpacity, Alert, SectionList, Image } from 'react-native'
import React from 'react'
import { COLOR, FONTSIZE } from '../theme/theme';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { MENUITEMS, RECIPES, BLOGS } from '../data/data';
import { SquareCard, SquareMediumCard, ListItem, Slider } from '../components';
import { Blog } from '../data/data';
import { MainTabScreenProps } from '../navigation/types';

const Home = ({ navigation, route }: MainTabScreenProps<'Home'>) => {
  function chunkArray(array: Blog[], chunkSize: number) {
    return Array.from({ length: Math.ceil(array.length / chunkSize) }, (v, index) =>
      array.slice(index * chunkSize, index * chunkSize + chunkSize)
    );
  }
  return (
    <ScrollView style={styles.background}>
      <View style={styles.headerTop}>
        <View style={{ flex: 1 }}>
          <Text style={styles.text}>Simple recipe with your<Text style={styles.textHightLight}> fridge's ingredients</Text></Text>

        </View>
        <FontAwesomeIcon icon={faBars} color={COLOR.onPrimaryContainer} size={30} />

      </View>

      {/*Top menu items*/}
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={MENUITEMS}
        contentContainerStyle={styles.FlatlistContent}
        keyExtractor={item => item.id}
        renderItem={({ item }) => {
          return (
            <Pressable onPress={() => Alert.alert('ok')}>
              <SquareCard name={item.name} imageLink={item.imageLink} />
            </Pressable>
          )
        }}
      />

      <Text style={styles.text}>Recipes For You</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={RECIPES}
        contentContainerStyle={styles.FlatlistContent}
        keyExtractor={item => item.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate('DetailRecipe')}>
              <SquareMediumCard title={item.title} imageLink={item.imageLink} nutritionnalInfomation={item.nutritionnalInfomation} />
            </TouchableOpacity>
          )
        }}
      />

      <Text style={styles.text}>Trending</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {chunkArray(BLOGS, 3).map((group, index) => (
          <View key={index}>
            {group.map(item => (
              <ListItem
                key={item.id}
                title={item.title}
                creationDay={item.creationDay}
                imageLink={item.imageLink}
              />
            ))}
          </View>
        ))}
      </ScrollView>

      <Text style={styles.text}>Đã xem gần đây</Text>
      <Slider data={BLOGS} />
    </ScrollView>
  )
}

export default Home;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    padding: 20,
    backgroundColor: COLOR.white
  },
  headerTop: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    color: COLOR.onPrimaryContainer,
    fontSize: FONTSIZE.size_20,
    fontWeight: '500'
  },
  textHightLight: {
    color: COLOR.primary,
    fontSize: FONTSIZE.size_20,
    fontWeight: '500'
  },
  FlatlistContent: {
    marginBottom: 10
  },
  listContent: {
    backgroundColor: 'pink',
    height: 300
  },
  container: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
})