import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Search, Scanner, Recipes, Profile, Home } from '../screens';
import { MainTabParamList } from './types';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHouse, faMagnifyingGlass, faCamera, faBook, faUser } from '@fortawesome/free-solid-svg-icons';

const Tab = createBottomTabNavigator<MainTabParamList>();
const MainTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={(route) => (
      {
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#FC6111',
      }
    )}>
      <Tab.Screen name="Home" component={Home} options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color, size }) => (
          <FontAwesomeIcon icon={faHouse} size={size} color={color} />
        ),
        headerShown: false,
      }} />
      <Tab.Screen name="Search" component={Search} options={{
        tabBarLabel: 'Search',
        tabBarIcon: ({ color, size }) => (
          <FontAwesomeIcon icon={faMagnifyingGlass} size={size} color={color} />
        ),
      }} />
      <Tab.Screen name="Scanner" component={Scanner} options={{
        tabBarLabel: 'Scanner',
        tabBarIcon: ({ color, size }) => (
          <FontAwesomeIcon icon={faCamera} size={size} color={color} />
        ),
        headerShown: false,
      }} />
      <Tab.Screen name="Recipes" component={Recipes} options={{
        tabBarLabel: 'Recipes',
        tabBarIcon: ({ color, size }) => (

          <FontAwesomeIcon icon={faBook} size={size} color={color} />
        ),
        headerShown: false,
      }} />
      <Tab.Screen name="Profile" component={Profile} options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({ color, size }) => (
          <FontAwesomeIcon icon={faUser} size={size} color={color} />
        ),
        headerShown: false,
      }} />
    </Tab.Navigator>
  )
}
export default MainTabNavigator;