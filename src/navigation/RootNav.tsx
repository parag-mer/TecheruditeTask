import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../screens/LoginScreen';
import { BottomTabNav } from './BottomTabNav';

export type RootStackParamList = {
  LoginScreen: undefined;
  BottomTabs: undefined;
};

export const RootNav = () => {
  const RootStack = createStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="LoginScreen"
      >
        <RootStack.Screen name="LoginScreen" component={LoginScreen} />
        <RootStack.Screen name="BottomTabs" component={BottomTabNav} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
