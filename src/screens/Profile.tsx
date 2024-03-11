import { View, Pressable, Text, FlatList, Alert, StyleSheet, ImageProps, ImageBackground, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { BORDERRADIUS, COLOR, FONTSIZE } from '../theme/theme';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { BLOGS, MENUITEMS, RECIPES } from '../data/data';
import { ListItem, SquareButton, SquareCard } from '../components';
const imgBackground: ImageProps = require('../assets/app_images/bg-1.jpg');

const user = {
  name: 'Nguyễn Ngọc Duy',
  age: 12,
  email: 'hangnguyen118.wy@gmail.com',
  avatar: require('../assets/app_images/user_images/avatar3.jpg'),

}
const Profile = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/app_images/bg-1.jpg')} resizeMode='cover' style={styles.background}>
        <View style={styles.headerTop}>
          <TouchableOpacity style={styles.buttonEdit}>
            <FontAwesomeIcon icon={faPenToSquare} size={26} color={COLOR.onSurfaceVar} />
          </TouchableOpacity>
        </View>

        <View style={styles.avatarBackground}>
          <Image source={user.avatar} resizeMode='cover' style={styles.avatarImage} />
        </View>


        <Text style={styles.userName}>{user.name}</Text>
        <Text>{user.email}</Text>
      </ImageBackground>

      {/*Top menu items*/}
      <View style={styles.content}>
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
        <Text style={styles.text}>Đã xem gần đây</Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={BLOGS}
          contentContainerStyle={styles.FlatlistContent2}
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
        <SquareButton text='Edit Profile' color={COLOR.surfaceDim} textColor={COLOR.black}/>
        <SquareButton text='Logout' color={COLOR.surfaceDim} textColor={COLOR.black}/>
      </View>

    </View>
  )
}

export default Profile;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: COLOR.surfaceGrey
  },
  background: {
    width: '100%',
    height: 210,
    alignItems: 'center',
  },
  headerTop: {
    width: '100%',
    alignItems: 'flex-end'
  },
  buttonEdit: {
    padding: 10,
    backgroundColor: COLOR.surfaceGrey,
    margin: 10,
    borderRadius: BORDERRADIUS.radius_25,
  },
  avatarBackground: {
    width: 180,
    height: 180,
    borderRadius: 100,
    borderColor: COLOR.white,
    borderWidth: 4,
    backgroundColor: COLOR.surfaceGrey,
  },
  avatarImage: {
    flex: 1,
    width: '100%',
    borderRadius: 100
  },
  userName: {
    fontSize: 24,
    fontWeight: '500',
    color: COLOR.black,
  },
  FlatlistContent: {
    marginTop: 86,
  },
  FlatlistContent2: {
    marginBottom: 20
  },
  content: {
    paddingLeft: 20,
    paddingRight: 20
  },
  text: {
    color: COLOR.onPrimaryContainer,
    fontSize: FONTSIZE.size_20,
    fontWeight: '500'
  },
})