import { View, Text, ScrollView, StyleSheet, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native'
import React, { useState } from 'react'
import { BORDERRADIUS, COLOR, FONTSIZE } from '../theme/theme';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faFilter, faLeftLong } from '@fortawesome/free-solid-svg-icons';
import { BLOGS, SEARCHLIST } from '../data/data';
import { SearchItem, RoundButtonStyle2, SquareButton, ListItem } from '../components';

const TEXTLIST = [
  'Orion', 'Cookie', 'Tomato', 'Apple', 'Orange', 'Melon'
]
const Search = () => {
  const [find, setFind] = useState(true);

  const handleBackButton = () =>{
    find ? setFind(false) : setFind(true)
  }
  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <TextInput placeholder='Search' style={styles.inputText} />
        <TouchableOpacity style={styles.filterButton}>
          <FontAwesomeIcon icon={faFilter} size={20} color={COLOR.primary} />
        </TouchableOpacity>
      </View>
      {
        find ?
          <View>
            <TouchableOpacity style={styles.backButton} onPress={handleBackButton}>
              <FontAwesomeIcon icon={faLeftLong} size={20} style={styles.backIcon}/>
              <Text>Quay lại</Text>
            </TouchableOpacity>

            <FlatList
              showsHorizontalScrollIndicator={false}
              data={BLOGS}
              contentContainerStyle={styles.FlatlistContent}
              keyExtractor={item => item.id}
              renderItem={({ item }) => {
                return (
                  <TouchableOpacity onPress={() => Alert.alert('ok')}>
                    <ListItem
                      key={item.id}
                      title={item.title}
                      creationDay={item.creationDay}
                      imageLink={item.imageLink}
                    />
                  </TouchableOpacity>
                )
              }}
            />
          </View>
          :
          <View>
            <View style={styles.wrapper}>
              <Text style={styles.text}>Gần đây</Text>
              {
                SEARCHLIST.map(item => (
                  <SearchItem content={item.content} creationDay={item.creationDay} />
                ))
              }
            </View>
            <View style={styles.wrapper}>
              <Text style={styles.text}>Đề xuất</Text>
              <View style={styles.flexRow}>
                {
                  TEXTLIST.map(item => (
                    <RoundButtonStyle2 text={item} />
                  ))
                }
              </View>
              <SquareButton text='Search' onPress={handleBackButton} />
            </View>
          </View>
      }


    </View>
  )
}

export default Search;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR.white,
    height: '100%',
    padding: 20
  },
  searchBar: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderRadius: BORDERRADIUS.radius_25,
    borderColor: COLOR.surfaceDim,
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  inputText: {
    fontSize: 16
  },
  filterButton: {
    padding: 12
  },
  text: {
    color: COLOR.onPrimaryContainer,
    fontSize: FONTSIZE.size_20,
    fontWeight: '500'
  },
  wrapper: {
    marginTop: 20,
  },
  flexRow: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  FlatlistContent: {
    marginBottom: 20
  },
  backButton: {
    flexDirection: 'row',
    padding: 10
  },
  backIcon: {
    marginRight: 10
  }
})