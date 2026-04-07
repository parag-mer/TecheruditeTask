import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SearchScreen } from '../screens/BottomTabScreens/SearchScreen';
import { EventsScreen } from '../screens/BottomTabScreens/EventsScreen';
import { FavouritesScreen } from '../screens/BottomTabScreens/FavouritesScreen';
import { ProfileScreen } from '../screens/BottomTabScreens/ProfileScreen';

export type BottomTabNavParamList = {
  SearchScreen: undefined;
  EventsScreen: undefined;
  FavouritesScreen: undefined;
  ProfileScreen: undefined;
};

export const BottomTabNav = () => {
  const TabNav = createBottomTabNavigator<BottomTabNavParamList>();

  return (
    <TabNav.Navigator>
      <TabNav.Screen name="SearchScreen" component={SearchScreen} />
      <TabNav.Screen name="EventsScreen" component={EventsScreen} />
      <TabNav.Screen name="FavouritesScreen" component={FavouritesScreen} />
      <TabNav.Screen name="ProfileScreen" component={ProfileScreen} />
    </TabNav.Navigator>
  );
};
