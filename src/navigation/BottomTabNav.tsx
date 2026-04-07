import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SearchScreen } from '../screens/BottomTabScreens/SearchScreen';
import { EventsScreen } from '../screens/BottomTabScreens/EventsScreen';
import { FavouritesScreen } from '../screens/BottomTabScreens/FavouritesScreen';
import { ProfileScreen } from '../screens/BottomTabScreens/ProfileScreen';
import Feather from '@react-native-vector-icons/feather';

export type BottomTabNavParamList = {
  SearchScreen: undefined;
  EventsScreen: undefined;
  FavouritesScreen: undefined;
  ProfileScreen: undefined;
};

export const BottomTabNav = () => {
  const TabNav = createBottomTabNavigator<BottomTabNavParamList>();

  return (
    <TabNav.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="EventsScreen"
    >
      <TabNav.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ focused }) => <Feather name="search" size={24} />,
          tabBarLabel: 'Search',
        }}
      />
      <TabNav.Screen
        name="EventsScreen"
        component={EventsScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="calendar"
              size={24}
              color={focused ? '#000' : '#1a1a1a'}
            />
          ),
          tabBarLabel: 'Events',
        }}
      />
      <TabNav.Screen
        name="FavouritesScreen"
        component={FavouritesScreen}
        options={{
          tabBarIcon: ({ focused }) => <Feather name="heart" size={24} />,
          tabBarLabel: 'Favourites',
        }}
      />
      <TabNav.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => <Feather name="user" size={24} />,
          tabBarLabel: 'Profile',
        }}
      />
    </TabNav.Navigator>
  );
};
